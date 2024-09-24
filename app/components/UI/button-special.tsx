import { ButtonProps } from "@/app/models/ButtonProps";

export default function SpecialButton({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
  w-[119px] h-[40px] 
  rounded-[1000px] border-[1px] border-grey-60
  px-[12px] pr-[16px] py-[8px] 
  flex items-center gap-[8px] 
  bg-gradient-to-b from-grey-60/70 to-grey-60
  hover:bg-gradient-to-b hover:from-grey-60/70 hover:via-grey-60 hover:to-white/5
  transition-all ease-out duration-[80ms]
"
    >
      <img src="/icons/Add.svg" alt="Add" className="h-[13.5px] w-[13.5px]" />
      {text}
    </button>
  );
}
