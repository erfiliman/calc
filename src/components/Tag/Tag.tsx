import React from 'react';
import {TagProps} from './Tag.props';
import styles from "./Tag.module.css";
import cn from "classnames";

const Tag = ({color, ...props}:TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, {
            [styles.green]: color == "green",
            [styles.red]: color == "red",
            [styles.orange]: color == "orange",
        })} {...props}>
        </div>
    );
};

export default Tag;