import { ButtonProps } from "@/app/models/ButtonProps";

export default function PrimaryIconLabelButton({icon, text, onClick, width, height}: ButtonProps) {
  return (
    <button className="w-auto h-[40px] rounded-lg py-[8px] pr-[16px] pl-[12px] flex items-center gap-[8px] bg-grey-60 hover:bg-grey-50 active:bg-grey-40" onClick={onClick}>
      <img
        src={icon}
        width={width}
        height={height}
      />
      {text}
    </button>
  );
}
