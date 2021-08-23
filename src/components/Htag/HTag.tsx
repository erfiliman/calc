import React from 'react';
import {HTagProps} from './HTag.props';
import styles from "./HTag.module.css";
import cn from "classnames";

const HTag = ({tag, children, ...props}:HTagProps): JSX.Element => {
    switch (tag) {
        case "h2":
            return <h2 className={cn(styles.h, styles.s)} {...props}>{children}</h2>
        case "h1":
            return <h1 className={cn(styles.h, styles.m)} {...props}>{children}</h1>

    }
};

export default HTag;