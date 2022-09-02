import React, { useEffect } from 'react';

const Auth = () => {
    useEffect(()=>{
        window.gapi.load('auth2', function() {
           window.gapi.auth2.init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
           }).then(()=>console.log('init OK'), ()=>console.log('init ERRor'))
        })
    },[])
    return (
        <div>
            Hello
        </div>
    );
};

export default Auth;