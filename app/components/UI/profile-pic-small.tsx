import { ProfilePicSmallProps } from "@/app/models/ProfilePicSmallProps"; // Correct spelling here

export default function ProfilePicSmall({ profilePic }: ProfilePicSmallProps) {
    return (
      <img
        src={profilePic || "photos/Default.png"}
        alt="Profile"
        className="w-[40px] h-[40px] rounded-full border-grey-70 border-[1px]"
      />
    );
}
