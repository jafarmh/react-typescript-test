import AddText from "./AddText"
import Comment from "./Comment"
import { ShowComment } from "../Interface"

export default function ShowCommentReply(props:ShowComment) {

    const {discussions}=props

    return <>
        <div className="flex-img-input border-bottom p-2">
            <div className="p-2 pos-r">
                <div className="border-left ">
                    <div className="m-start-1"><Comment data={discussions.comments}/></div>
                    <div className="m-i-50">
                        <div className="m-b-1"><Comment data={discussions.replies[0]}/></div>
                        <div className="m-b-1"><Comment data={discussions.replies[1]}/></div>
                        <div className="m-b-1"><Comment data={discussions.replies[2]}/></div>
                        <div className="m-b-1"><AddText placeHolder="Reply" /></div>


                    </div>
                </div>


            </div>
        </div>
    </>
}