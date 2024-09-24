import { ButtonProps } from "@/app/models/ButtonProps";

export default function ButtonLabelPrimary({text, onClick}: ButtonProps) {
    return(
        <button onClick={onClick} className="w-[91px] h-[40px] rounded-lg py-[8px] px-[16px] gap-[8px] bg-grey-60 hover:bg-grey-50 active:bg-grey-40">{text}</button>
    )
}