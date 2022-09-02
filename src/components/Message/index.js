import React from 'react';
import styles from './Message.module.scss'

import Time from '../Time';

const Message = ({avatar, text, date, isMe}) => {
    return (
        <div className={!isMe ? styles.message : styles.message && styles.isme}>
            <div className={styles.avatar}>
                <img src={avatar} alt="User avatar"/>
            </div>
            <div className={styles.content}>
                <div className={styles.bable}>
                    <p className={styles.text}>{text}</p>
                </div>
                <span className={styles.date}><Time date= {date}/></span>
            </div>

        </div>
    );
};

export default Message;