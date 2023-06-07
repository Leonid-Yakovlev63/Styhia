import React, { Component } from 'react';
import axios from 'axios';
import PageTitle from '../UI/PageTitle/PageTitle';
import LentPost from './LentPost/LentPost';
import Poem from '../Poem/Poem';
import api from '../../service/api';

class Lent extends Component {
  state = {
    posts: [],
    lastId: null,
    loading: true,
    error: ''
  }

  componentDidMount() {
    this.loadPosts();
    window.addEventListener('scroll', this.handleScroll);
    document.getElementById('main').addEventListener('scroll', this.hScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.getElementById('main').removeEventListener('scroll', this.hScroll)
  }

  loadPosts = () => {
    const { lastId, posts } = this.state;

    api.getUserLent(lastId)
      .then(response => {
        this.setState({
          posts: [...posts, ...response],
          loading: false,
          lastId: response[response.length-1].id,
        });
      })
      .catch(error => {
        this.setState({ error: 'Error loading posts' });
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

  /**
   * 
   * @param {} e 
   * @returns 
   */
  hScroll = () =>{
    const e = document.getElementById("main");
    const { loading } = this.state;
    if (loading) return;
    const height = e.scrollTopMax;
    const scroll = e.scrollTop;
    if (scroll >= height - 200) {
      this.setState({ loading: true }, () => {
        this.loadPosts();
      });
    }
  }

  render() {
    const { posts, loading, error } = this.state;

    return (
      <div onScrollCapture={e=>this.hScroll(e)}>
        <PageTitle title = {"Лента"} />
          {posts.map(post => (
              <Poem key={post.id} data={post} comments />
          ))}
        {loading && <PageTitle title = {"Загрузка..."} />}
        {error && <PageTitle title = {"Ошибка загрузки страницы"} />}
      </div>
    );
  }
}

export default Lent;



