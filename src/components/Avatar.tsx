import { AvatarProps } from "../Interface";

export default function Avatar(props: AvatarProps) {

    const { src, type = "img" } = props;

    return <>
        {type === "img" ? <div className="avatar"><img src={src} alt="" /></div> :
            <div>
                <div className="avatar-txt"><span>{src}</span></div>
            </div>
        }

    </>

}