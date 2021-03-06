import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId}  = useParams();
    const [friend ,setFriend]= useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`

        fetch(url)
        .then(response =>response.json())
        .then(data =>setFriend(data) )
    },[])

    const detailaStyle = {
        border: '1px solid green',
        borderRadius:'25px',
        textAlign:'center',
        padding:'20px',
        
        margin: '200px',
     
    }

    const {name ,email ,phone ,website} = friend
    return (
        <div style={detailaStyle}>
            {/* <h1>here is friend details {friendId}</h1> */}
            <h1>Name :{name}</h1>
            <h2> Email :{email}</h2>
            <h3>Phone :{phone}</h3>
            <h4>website :{website}</h4>

            
        </div>
    );
};

export default FriendDetails;