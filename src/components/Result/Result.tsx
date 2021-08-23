import React, {useEffect, useRef, useState} from 'react';
import {ResultProps} from './Result.props';
import styles from "./Result.module.css";
import cn from "classnames";
import HTag from "../Htag/HTag";

const Result = ({refInput, value, setValue, ...props}: ResultProps): JSX.Element => {
    return (
        <HTag tag="h1">{value}</HTag>
    );
};

export default Result;