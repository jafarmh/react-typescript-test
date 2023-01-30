export interface IUser {
    name: string;
    avatar?: string;
}
export interface IComment {
    id: number;
    date: number; // unix timestamp in milliseconds.
    user: IUser;
    text: string;
    likes: number;
    iLikedIt: boolean;
}
export interface IDiscussion extends IComment {
    replies: IComment[];
}
export interface IProps {
    comments: IComment[];
}

export interface AddTextProps{
    placeHolder:string
}
export interface AvatarProps{
    src:string
    type?:string

}
export interface CommentProps{
    data:IComment

}

export interface ShowComment{
    discussions:{
        comments:IComment,
        replies:IComment[],

    }
}