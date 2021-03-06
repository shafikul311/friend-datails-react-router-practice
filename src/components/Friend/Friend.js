import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name , email ,id}= props.friend
    const friendStyle  = {
        border : '1px solid green',
        margin : '20px',
        padding : '20px',
        borderRadius : '25px',
        textAlign : 'center'
    }

    const history = useHistory();
    const handleClick = (friendid) => {
        const url =`/friend/${friendid}`
        history.push(url)

    }
    return (
        <div style={friendStyle}>
            <h1>Name :{name}</h1>
            <h3> Email : {email}</h3>

            <p>   <Link to ={`/friend/${id}`}>
                <button>show details of id {id}</button>
                </Link> </p>

                <button onClick={() =>handleClick(id)}>Click Here</button>
        </div>
    );
};

export default Friend;