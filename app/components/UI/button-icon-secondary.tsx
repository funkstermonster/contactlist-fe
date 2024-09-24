import { ButtonProps } from "@/app/models/ButtonProps";

export default function ButtonIconSecondary({icon, width, height}: ButtonProps) {
  return (
    <button className="flex items-center justify-center w-[40px] h-[40px] rounded-lg p-[8px] gap-[8px] bg-grey-100 hover:bg-grey-90 active:bg-grey-80">
      <img
        src={icon}
        width={width}
        height={height}
        alt="Add"
      />
    </button>
  );
}
