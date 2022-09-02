import React, {useState} from 'react';
import DialogItem from '../DialogItem';

import styles from './DialogsList.module.scss'

const DialogsList = ({ lastMessage,items, onClickDialog}) => {
    const [searchValue, setSearchValue]= useState('')
    const sortedItems = [...items].sort((a,b)=>new Date(b.created_at) - new Date(a.created_at));
    const onChangeSearchValue = (e) =>{
        setSearchValue(e.target.value)
    }
   
    
    
    return (     
        <div className={styles.dialogs}>
            
            <div className={styles.search}>
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <input value={searchValue} onChange={onChangeSearchValue} type="text" placeholder="Search or start new chat" />
            </div>
            <h2>Chats</h2>         
           {
            sortedItems.filter(item=> {
                const fullName = item.user.fullname.toLowerCase()
                return fullName.includes(searchValue.toLowerCase())})
                .map(item=>{                    
                    return (<DialogItem 
                        onClickDialog={()=>onClickDialog(item)}                      
                        key={item.id} 
                        user={item.user} 
                        message={item.text} 
                        created_at={item.created_at}
                        {...item}/>    
                    )                             
                
            })
            
           }
            
        </div>
    );
}

export default DialogsList;