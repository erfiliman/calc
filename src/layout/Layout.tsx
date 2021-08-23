import React, {useState} from 'react';
import styles from "./Layout.module.css";
import {LayoutProps} from "./Layout.props";
import Tag from "../components/Tag/Tag";
import HTag from "../components/Htag/HTag";
import Result from "../components/Result/Result";
import Notification from "../components/Notification/Notification";
import ScrollFix from "../components/ScrollFix/ScrollFix";

const Layout = ({onClickHistory, setShowHistory, showHistory,duration, showNotification, copyHandler, value, history, children}:LayoutProps) => {
    return (
        <div className={styles.container}>
            {showNotification? <Notification text="Скопировано в буфер обмена" duration={duration}/> : ""}
            <div className={styles.result}>
                <div className={styles.resultTopPanel}>
                    <div>
                        <Tag color="red"/>
                        <Tag color="orange"/>
                        <Tag color="green"/>
                    </div>
                    <div className={styles.historyBtn} onClick={()=> setShowHistory((ps)=> !ps)}></div>
                </div>
                {
                    !showHistory? <div className={styles.resultPanel}>
                        <div className={styles.expression}>
                            <HTag tag="h2">
                                {
                                   history.length>0 && history[history.length-1].expression
                                }
                            </HTag>
                        </div>
                        <div className={styles.currentResult} onClick={copyHandler}>
                            <HTag tag="h1">{value}</HTag>
                            <ScrollFix depend={value}/>
                        </div>
                    </div>:
                        <div className={styles.history}>
                            {
                                history.map((item, index)=><HTag tag={'h2'} className={styles.historyItem} onClick={()=> onClickHistory(index)} key={index}>{item.expression}</HTag>)
                            }
                        </div>

                }

            </div>
            <div className={styles.numbers}>
                {children}
            </div>
        </div>
    );
};

export default Layout;