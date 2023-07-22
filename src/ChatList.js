import React from 'react';
import { Chat } from './Chat';
import { Messages } from './Messages';
export const ChatList = ({ chatList }) => {
  const [loadedChat, setLoadedChat] = React.useState({});
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            borderRight: '2px solid gray',
          }}
        >
          {chatList.map((chat) => {
            return <Chat setLoadedChat={setLoadedChat} chat={chat} />;
          })}
        </div>
        <div style={{ flex: 1, position: 'sticky' }}>
          <Messages loadedChat={loadedChat} />
        </div>
      </div>
      )
    </>
  );
};
