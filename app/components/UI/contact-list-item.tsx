import ContactListItemProps from "@/app/models/ContactListItemProps";
import ProfilePicSmall from "./profile-pic-small";

export default function ContactListItem({
  name,
  phone,
  profilePic,
}: ContactListItemProps) {
  return (
   
      <div className="w-[720px] h-[64px] p-[12px 0px] flex items-center gap-[16px]">
        {/* Profile Picture */}
        <ProfilePicSmall profilePic={profilePic} />
        {/* Name and Phone Number */}
        <div className="flex flex-col">
          <h3 className="text-white">{name || "Jonas Blue"}</h3>
          <span className="message opacity-75 text-gray-400">
            {phone || "+36 01 234 5678"}
          </span>
        </div>

        {/* Icon section */}
        <div className="flex ml-auto gap-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Mute Button */}
          <button className="w-[40px] h-[40px] p-[8px] rounded-lg hover:bg-grey-80">
            <img src="icons/Mute.svg" alt="Mute" />
          </button>
          {/* Call Button */}
          <button className="w-[40px] h-[40px] p-[8px] rounded-lg  hover:bg-grey-80">
            <img src="icons/Call.svg" alt="Call" />
          </button>
          {/* More Button */}
          <button className="w-[40px] h-[40px] p-[8px] rounded-lg  hover:bg-grey-80">
            <img src="icons/More.svg" alt="More" />
          </button>
        </div>
      </div>

  );
}
