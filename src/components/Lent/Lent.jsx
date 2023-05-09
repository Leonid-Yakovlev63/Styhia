import React, { Component } from 'react';
import axios from 'axios';
import PageTitle from '../UI/PageTitle/PageTitle';
import LentPost from './LentPost/LentPost';

class Lent extends Component {
  state = {
    posts: [],
    currentPage: 1,
    loading: true,
    error: ''
  }

  componentDidMount() {
    this.loadPosts();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  loadPosts = () => {
    const { currentPage, posts } = this.state;
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=100`;

    axios.get(url)
      .then(response => {
        this.setState({
          posts: [...posts, ...response.data],
          loading: false,
          currentPage: currentPage + 1
        });
      })
      .catch(error => {
        this.setState({ error: 'Error loading posts', loading: false });
      });
  }

  handleScroll = () => {
    const { loading } = this.state;
    if (loading) return;

    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const content = document.content;
    const html = document.documentElement;
    const docHeight = Math.max(content.scrollHeight, content.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - 200) {
      this.setState({ loading: true }, () => {
        this.loadPosts();
      });
    }
  }

  render() {
    const { posts, loading, error } = this.state;

    return (
      <div>
        <PageTitle title = {"Лента"} />
          {posts.map(post => (
              <LentPost key={post.id} title = {post.title} content = {post.content}/>
          ))}
        {loading && <PageTitle title = {"Загрузка..."} />}
        {error && <PageTitle title = {"Ошибка загрузки страницы"} />}
      </div>
    );
  }
}

export default Lent;



