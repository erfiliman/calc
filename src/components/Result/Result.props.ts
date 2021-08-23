import {DetailedHTMLProps, HTMLAttributes, Ref} from "react";

export interface ResultProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string,
    setValue: (value: string) => void,
    refInput: Ref<HTMLInputElement>
}