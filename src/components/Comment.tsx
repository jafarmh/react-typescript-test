import Avatar from "./Avatar";
import { CommentProps } from "../Interface";
import Like from '../img/like.svg';
import LikeLight from '../img/likeLight.svg';

export default function Comment(props: CommentProps) {

    const { data } = props
    const diff = (timestamp1: number, timestamp2: number) => {
        var difference = timestamp1 - timestamp2;
        var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

        return daysDifference;
    }

    return <>
        {data !==undefined&&<div className="comment">
            <Avatar src={data.user?.avatar ?? data.user.name.slice(0,2).toUpperCase()} type={data.user.avatar !== undefined ? "img" : "txt"} />
            <div className="comment-body">
                <div>
                    <strong>{data.user.name}</strong> <small>{diff(Date.now(), data.date)} ago</small>
                </div>
                <div>
                    <p>{data.text}</p>
                </div>
                <div className="bag-reply">
                    <div className={`${data.iLikedIt?"bag bag-blue":"bag bag-disable" }`}>
                        <img className="bag-like-img " src={data.iLikedIt?LikeLight:Like} alt="" />
                        <span>{data.likes}</span>
                    </div>
                    {!data.iLikedIt && <div className="reply">
                        Reply
                    </div>}
                </div>

            </div>
        </div>}
    </>
}