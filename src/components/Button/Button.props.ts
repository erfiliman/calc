import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size?: "m" | "l";
    color: "grey" | "white" | "purple";
}