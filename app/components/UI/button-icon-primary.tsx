import { ButtonIconPrimaryProps } from "@/app/models/ButtonIconPrimaryProps";

export default function ButtonIconPrimary({icon, onClick, width, height}: ButtonIconPrimaryProps) {
  return (
    <button className="flex items-center justify-center w-[40px] h-[40px] rounded-lg p-[8px] gap-[8px] bg-grey-60 hover:bg-grey-50 active:bg-grey-40">
      <img
        src={icon}
        alt="Icon"
        onClick={onClick}
        width={width}
        height={height}
      />
    </button>
  );
}
