import { AddTextProps } from "../Interface"
import Avatar from "./Avatar"

export default function AddText(props:AddTextProps){

    const {placeHolder}=props

    return <>
        <div className="flex-img-input  p-2">
            <Avatar src="https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg"/>
            <div className="gr1">
                <input type="text" placeholder={placeHolder} className="input" />
            </div>
        </div>
    </>
}