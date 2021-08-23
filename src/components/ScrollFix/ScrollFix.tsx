import React, {useEffect} from 'react';
import {ScrollFixProps} from './ScrollFix.props';
import cn from "classnames";

const ScrollFix = ({depend}:ScrollFixProps): JSX.Element => {
    const fieldRef = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (fieldRef.current) {
            fieldRef.current.scrollIntoView();
        }
    }, [depend]);
    return <div ref={fieldRef}></div>
};

export default ScrollFix;