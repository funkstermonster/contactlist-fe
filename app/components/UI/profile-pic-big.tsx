import { ProfilePicBigProps } from "@/app/models/ProfilePicBigProps";

export default function ProfilePicBig({profilePic}: ProfilePicBigProps) {
    return(
        <img src={profilePic || "photos/Default.png"} alt="Default" className="w-[88px] h-[88px] rounded-full border-grey-70"/>
    );
}