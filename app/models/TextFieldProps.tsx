import { ChangeEventHandler } from "react";

export interface TextFieldProps {
    label: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: ChangeEventHandler;
}