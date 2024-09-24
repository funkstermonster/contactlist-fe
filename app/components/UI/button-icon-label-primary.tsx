import { ButtonProps } from "@/app/models/ButtonProps";

export default function PrimaryIconLabelButton({icon, text}: ButtonProps) {
  return (
    <button className="w-[139px] h-[40px] rounded-lg py-[8px] pr-[16px] pl-[12px] flex items-center gap-[8px] bg-grey-60 hover:bg-grey-50 active:bg-grey-40">
      <img
        src={icon}
        className="h-[13.5px] w-[13.5px] top-[5.25px] left-[5.25px]"
      />
      {text}
    </button>
  );
}
