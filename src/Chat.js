import React from 'react';
import './style.css';

export const Chat = ({ chat , setLoadedChat }) => {

  let date = new Date(chat.latestMessageTimestamp);
  let finaldateformat =
    date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  return (
    <>
      <div className={'MainChat'} onClick={()=>{setLoadedChat(chat)}}>
        <div style={{ flex: 1, margin: '0 5px 0 0' }}>
          <img height={'50px'} width={"70px"} src={chat.imageURL} />
        </div>
        <div style={{ flex: 8 }}>
          <p>{chat.title}</p>
          <p>{chat.orderId}</p>
          <p style={{ color: 'grey', fontSize: '12px' }}>
            {chat.messageList.length ? chat.messageList[0].message : ''}
          </p>
        </div>
        <div
          style={{
            flex: 1,
            padding: '10px 0',
            color: 'grey',
            fontSize: '12px',
          }}
        >
          {finaldateformat}
        </div>
      </div>
    </>
  );
};
