import React, {useEffect, useState} from 'react';
import {NotificationProps} from './Notification.props';
import styles from "./Notification.module.css";
import cn from "classnames";

const Notification = ({text, duration, ...props}: NotificationProps): JSX.Element => {
    const [animation, setAnimation] = useState<boolean>(false);
    useEffect(()=> {
        setAnimation(true);
        setTimeout(()=> {
            setAnimation(false);
        }, duration - 400)
    }, [])
    return (
        <div className={cn(styles.notification, {
            [styles.active]: animation
        })} {...props}>
            {text}
        </div>
    );
};
export default Notification;