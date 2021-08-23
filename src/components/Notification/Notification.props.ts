import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface NotificationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string,
    duration: number,
}