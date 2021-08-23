import React from 'react';
import {ButtonProps} from './Button.props';
import styles from "./Button.module.css";
import cn from "classnames";

const Button = ({size = "m", color = "grey", children, ...props}:ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, {
            [styles.white]: color == "white",
            [styles.grey]: color ==  "grey",
            [styles.purple]: color ==  "purple",
            [styles.l]: size ==  "l",
        })} {...props}>
            {children}
        </button>
    );
};

export default Button;