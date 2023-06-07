import { useSelector } from 'react-redux';
import s from './Poem.module.css'
import AuthorBlock from './AuthorBlock/AuthorBlock';
import File from './File/File';
import PageTitle from '../UI/PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';

const Poem = (props) => {
    /**
     * @type {{id:number,author:{id:number,name:string,surname:string,avatar:number},title:string|null,text:string|null,files:{id:number,name:string,type:"IMAGE"|"ANY"}[]|null,likes:number,dislikes:number,createdAt:Date}}
     */
    const data = props.data;
    if(!data) return <PageTitle title="Не найдено" />
    const user = useSelector(state=>state.userInfo);
    const history = useNavigate();
    let images = data.files?.filter(v=>v.type==='IMAGE').map(v=><img src={`/api/files/${v.id}`} name={v.name}/>);
    let files = data.files?.filter(v=>v.type==='ANY').map(v=><File data={v} />);console.log(data);
    return (
        <div style={props.postPage?{marginBottom:0, borderBottomLeftRadius:0, borderBottomRightRadius:0}:undefined} className={s.componentWrapper}>
            <AuthorBlock postId={data.id} user={data.author} date={data.createdAt} likes={data.likes} dislikes={data.dislikes} react={data.react} deleteId={user?.id==data.author.id?data.id:null} reload={props.reload}/>
            <div className={s.mainBlock}>
                <div className={s.title}>
                    {data?.title?data.title:undefined}
                </div>
                <div className={s.text}>
                    {data?.text?data.text:undefined}
                </div>
            </div>
            <div className={images?.length>1?s.imagesMany:s.images}>{images}</div>
            <div className={s.files}>{files}</div>
            {props.comments?<button className={s.comments} onClick={()=>history(`/poem/${data.id}`)}>комментарии</button>:undefined}
        </div>
    );
};

export default Poem;