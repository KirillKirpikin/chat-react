import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { DialogsList, Messages } from '../../components';

const initDialogs = [
    {
        "id": "630ca91e4a24aa0551c3d5a1",
        "user": {
            "fullname": "Alice Freeman",
            "avatar": "https://klike.net/uploads/posts/2022-05/1651820178_1.jpg"
        }
    },
    {
        "id": "630ca91e4ad5966998ccf734",
        "user": {      
            "fullname": "Josefina",
            "avatar": "https://st.depositphotos.com/1011643/2990/i/450/depositphotos_29907169-stock-photo-lovely-middle-aged-woman-sitting.jpg"
        }
    },
    {
        "id": "630ca91e4961d1016c86ee50",
        "user": {
            "fullname": "Santa Barbara",
            "avatar": "https://media-s3-us-east-1.ceros.com/forbes/images/2021/12/06/bbff530cddcb7ed1b79ecee931f9f854/artboard-2-copy-6.jpg"
        }    
    },
    {
        "id": "630ca91e49awd1016c86ekr5",
        "user": {
            "fullname": "Velazqez",
            "avatar": "https://i1.wallbox.ru/wallpapers/main/201628/810766f0cfcbc84.jpg"
        }
    },
    {
        "id": "630ca91e496dad1016c861337",
        "user": {
            "fullname": "Barrera",
            "avatar": "https://patronage.ru/files/patronage/pages/3492/zdorove_muzhchiny_posle_40.jpg"
        }
    }
]
const initMessage=[ 
    {
    id: "35ce83ca80a9906817c95cbe45",
    text: "Ea deserunt exercitation sit irure aliqua ea. Nostrud est veniam eiusmod cillum duis exercitation veniam ad. Commodo occaecat veniam tempor ad dolor.",
    date: "Mon Jul 17 2019 15:23:39 GMT+0000 (UTC)",
    avatar: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
    dialog: "630ca91e4ad5966998ccf734",
    isMe: true
  },
  {
    id: "35ce83ca8371d66a6490a6628",
    text: "Excepteur voluptate reprehenderit duis duis fugiat reprehenderit consectetur nisi. Anim nulla amet aliquip Lorem culpa. Labore voluptate non Lorem irure adipisicing.",
    date: "Tue Sep 04 2020 21:13:48 GMT+0000 (UTC)",
    avatar: "https://st.depositphotos.com/1011643/2990/i/450/depositphotos_29907169-stock-photo-lovely-middle-aged-woman-sitting.jpg",
    dialog: "630ca91e4ad5966998ccf734",
    isMe: false
    
  },
  {
    id: "35ce83ca80a9906817c95c7e0",
    text: "How much money are you bringing?",
    date: "Mon Jul 17 1978 15:23:39 GMT+0000 (UTC)",
    avatar: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
    dialog: "630ca91e4961d1016c86ee50",
    isMe: true
  },
  {
    id: "35ce83ca8371d66a6490a6629",
    text: "I have 3000$ in cash and my credit cards as well. I’m going to cover all my expenses in the country.",
    date: "Tue Sep 04 1990 21:13:48 GMT+0000 (UTC)",
    avatar: "https://media-s3-us-east-1.ceros.com/forbes/images/2021/12/06/bbff530cddcb7ed1b79ecee931f9f854/artboard-2-copy-6.jpg",
    dialog: "630ca91e4961d1016c86ee50",
    isMe: false
  },
  {
    id: "35ce83ca8373d66a6490a6629",
    text: "Well, we have a couple of vegetarians in our group, but I don’t think that would be a problem, wouldn’t it?",
    date: "Tue Sep 04 1990 21:13:48 GMT+0000 (UTC)",
    avatar: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
    dialog: "630ca91e4a24aa0551c3d5a1",
    isMe: true
  },{
    id: "35ce83ca8371d6616490a6629",
    text: "You’re right. We can offer a special vegetarian menu with a wide selection of food in our restaurant.",
    date: "Tue Sep 04 1990 21:13:48 GMT+0000 (UTC)",
    avatar: "https://klike.net/uploads/posts/2022-05/1651820178_1.jpg",
    dialog: "630ca91e4a24aa0551c3d5a1",
    isMe: false
  },
  {
    id: "35c983ca8371d66a6490a6629",
    text: "What do you do there?",
    date: "Tue Sep 04 2017 21:13:48 GMT+0000 (UTC)",
    avatar: "https://i1.wallbox.ru/wallpapers/main/201628/810766f0cfcbc84.jpg",
    dialog: "630ca91e49awd1016c86ekr5",
    isMe: false
  },{
    id: "35ce83ca8371d66a6490a6629",
    text: "I work as an architect at a design company. And what do you do for a living, Sandra?",
    date: "Tue Sep 04 2018 21:13:48 GMT+0000 (UTC)",
    avatar: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
    dialog: "630ca91e49awd1016c86ekr5",
    isMe: true
  },
  {
    id: "35ce83ca8371d86a6490a6629",
    text: "What do you do there?",
    date: "Tue Sep 04 2019 21:13:48 GMT+0000 (UTC)",
    avatar: "https://patronage.ru/files/patronage/pages/3492/zdorove_muzhchiny_posle_40.jpg",
    dialog: "630ca91e496dad1016c861337",
    isMe: false
  },{
    id: "35ce83ca8371d6626490a6629",
    text: "I work as an architect at a design company. And what do you do for a living, Sandra?",
    date: "Tue Sep 04 2020 21:13:48 GMT+0000 (UTC)",
    avatar: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
    dialog: "630ca91e496dad1016c861337",
    isMe: true
  }

]
const Home = () => {
    const [dialogs, setDialogs]= useState(initDialogs)
    const [message, setMessage]= useState(initMessage)
    const [lastMessage, setLastMessage] = useState([]) 
    const [filterMessage, setFilterMessage] = useState([]) 
    const [idDialogs, setIdidDialogs]=useState() 
    const [input, setInput]=useState('') 
    const [responce, setResponce] = useState() 
    const [user, setUser] = useState() 

    
    useEffect(()=>{
        const dial = localStorage.getItem('dialogs')
        const mes = localStorage.getItem('message')
        setDialogs(JSON.parse(dial))
        setMessage(JSON.parse(mes))

    },[])

    useEffect(()=>{
        updateDialogs(idDialogs)
        console.log('obnov message');
        setLastMessage(updateLastMessage()) 
        fetch("https://api.chucknorris.io/jokes/random")
            .then(res=>res.json())
            .then(json=>{setResponce(json.value)})     
        // eslint-disable-next-line react-hooks/exhaustive-deps       
    },[message])

    useEffect(()=>{
        localStorage.setItem('dialogs', JSON.stringify(dialogs))
        localStorage.setItem('message', JSON.stringify(message))
    }, [dialogs, message])
    
    useEffect(()=>{        
        setDialogs(updateDialogList())        
     // eslint-disable-next-line react-hooks/exhaustive-deps   
    },[lastMessage])

    const updateLastMessage=()=>{
        let result = [];
        let unique = [];
        for (let i = message.length - 1; i >= 0; i--) {
            if(!unique[message[i].dialog]){
                result.push(message[i])
                unique[message[i].dialog] = 1;
            }            
        }
        return result
    }  

    const updateDialogList=()=>{
        console.log(lastMessage);
        let newDialog = [...dialogs]
        for (let i = 0; i < newDialog.length; i++) {        
            for (let k = 0; k < lastMessage.length; k++) {                             
                if(newDialog[i].id === lastMessage[k].dialog){                    
                    newDialog[i].text = lastMessage[k].text
                    newDialog[i].created_at = lastMessage[k].date
               }                                               
            }            
        }
        return newDialog     
    }

    const updateDialogs=(id)=>{
        if(id)  setFilterMessage(message.filter(item=>item.dialog.includes(id)))   
    }

    const onClickDialog = (item) =>{
        console.log(item);
        setUser(item) 
        setIdidDialogs(item.id)        
        updateDialogs(item.id)  
    }

    const sendMessage = () =>{        
        setMessage(prev => [
            ...prev,
            {
                id: Date.now(),
                text: input,
                date: new Date(),
                avatar: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
                dialog: idDialogs,
                isMe: true
            }
        ])
    }   

    const responceMessage = () =>{        
        setMessage(prev=>[
            ...prev,
            {
                id: Date.now(),
                text: responce,
                date: new Date(),
                avatar: user.user.avatar,
                dialog: idDialogs,                
            }
        ])
    }    
    

    const addMessage= e =>{
        if(e.key === 'Enter' && idDialogs) {       
            sendMessage()
            setTimeout(()=>{
                responceMessage(message)
            },4000)                                
            setInput('')                   
        }

    }

    
    return (
        <div className={styles.home}>
            <div className={styles.chat}>
                <div className={styles.sidebar}>
                    <div className={styles.header}> 
                        <div className={styles.icon}>
                        <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="User avatar"/>
                        </div>                                                         
                    </div>
                    <div className={styles.middle}>
                        
                        <DialogsList lastMessage={lastMessage} items= {dialogs} onClickDialog={onClickDialog}/>

                    </div>
                
                </div>
                <div className={styles.dialogs}>
                    <div className={styles.dialogsHeader}>
                        <div className={styles.dialogsIcon}>
                            <img src={user ? user.user.avatar : 'https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-pl9f8jilrfwy252e8ja370m55hdnj3wg440hbtobjm.png'} alt=""/>                            
                        </div>
                        <h2 className={styles.dialogsUser}>{user ? user.user.fullname : 'Open Dialog'}</h2>
                    </div>
                    <div className={styles.dialogsChat}>
                        <Messages items={filterMessage}/>

                    </div>
                    <div className={styles.input}>
                    <svg  viewBox="0 0 29 31"  xmlns="http://www.w3.org/2000/svg">
                    <path onClick={addMessage}  d="M0.949607 1.21563C1.17103 1.0467 1.4362 0.9447 1.71375 0.9217C1.99131 0.898699 2.26965 0.955658 2.51586 1.08584L27.3075 14.2108C27.5419 14.3348 27.7381 14.5204 27.875 14.7475C28.0118 14.9747 28.0841 15.2348 28.0841 15.5C28.0841 15.7652 28.0118 16.0254 27.875 16.2525C27.7381 16.4797 27.5419 16.6652 27.3075 16.7892L2.51586 29.9142C2.26979 30.0443 1.99161 30.1014 1.71417 30.0785C1.43673 30.0557 1.17164 29.9539 0.950191 29.7852C0.728747 29.6165 0.560212 29.388 0.464493 29.1265C0.368775 28.8651 0.349874 28.5818 0.410024 28.31L3.25669 15.5L0.410024 2.69147C0.349677 2.41962 0.368421 2.13619 0.464039 1.87466C0.559657 1.61313 0.728152 1.38444 0.949607 1.21563ZM5.91961 16.9583L3.94211 25.8585L20.7538 16.9583H5.91961ZM20.7538 14.0417H5.91961L3.94211 5.14147L20.7538 14.0417Z" fill="#959595"/>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="Type your message" 
                        value={input}
                        onChange={event=> setInput(event.target.value)}
                        onKeyPress={addMessage}                        
                        />

                    </div>



                </div>

            </div>   
                        
        </div>
    );
};

export default Home;