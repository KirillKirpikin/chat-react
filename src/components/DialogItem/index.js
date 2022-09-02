import React from 'react';
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import styles from './DialogItem.module.scss'

const getMessageTime = (created_at)=>{
    
    if(isToday(new Date(created_at))){
        return format(new Date(created_at), 'HH:mm')
    }else{
        return format(new Date(created_at), 'LLL d,Y')
    }
}


const DialogItem = ({ id, user, message, created_at, onClickDialog}) => {
    
    return (
        <div className={styles.item} 
            onClick = {onClickDialog}
        >
            <div className={styles.avatar}>
                {/* <img src={user.avatar} alt=""/>*/}
                <img src={user.avatar} alt=""/>
            </div>
            <div className={styles.info}>
                <div className={styles.top}>
                    <b>{user.fullname}</b>
                    <span className={styles.date}>
                        {created_at ? getMessageTime(created_at) : 'Zero message'}
                    </span>                
                </div>
                <div className={styles.bottom}>
                    <p>
                       { message ? message : 'Zero message' }
                    </p>            
                </div>          
            </div>
            
        </div>
    );
};

export default DialogItem;