import { ButtonProps } from "@/app/models/ButtonProps";

export default function ButtonLabelSecondary({text, onClick}: ButtonProps) {
    return(
        <button className="w-[91px] h-[40px] rounded-lg py-[8px] px-[16px] gap-[8px] bg-grey-100 hover:bg-grey-90 active:bg-grey-80" onClick={onClick}>
            {text}
        </button>
    );
}