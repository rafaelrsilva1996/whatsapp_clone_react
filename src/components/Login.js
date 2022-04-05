import React from 'react';
import './Login.css';
import Api from '../Api';

export default ({onReceive}) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        } else {
            alert("Não foi possível logar!");
        }
    }

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    );
}