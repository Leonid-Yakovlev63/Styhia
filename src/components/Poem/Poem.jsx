import { useSelector } from 'react-redux';
import s from './Poem.module.css'
import AuthorBlock from './AuthorBlock/AuthorBlock';
import File from './File/File';

const Poem = (props) => {
    /**
     * @type {{id:number,author:{id:number,name:string,surname:string,avatar:number},title:string|null,text:string|null,files:{id:number,name:string,type:"IMAGE"|"ANY"}[]|null,likes:number,dislikes:number,createdAt:Date}}
     */
    const data = props.data;
    const user = useSelector(state=>state.userInfo);
    let images = data.files?.filter(v=>v.type==='IMAGE').map(v=><img src={`/api/files/${v.id}`} name={v.name}/>);
    let files = data.files?.filter(v=>v.type==='ANY').map(v=><File data={v} />);console.log(data)
    return (
        <div className={s.componentWrapper}>
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
        </div>
    );
};

export default Poem;