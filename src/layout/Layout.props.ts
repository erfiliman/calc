import {DetailedHTMLProps, HTMLAttributes, ReactNode, Ref} from "react";
import {HistoryItem} from "../Types";

export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode,
    value: string,
    history: HistoryItem[],
    copyHandler: ()=> void,
    showNotification: boolean,
    duration: number,
    showHistory: boolean,
    setShowHistory: (b:boolean | ((b: boolean)=> boolean))=> void,
    onClickHistory: (i: number) => void
}