import React from 'react';
import './style.css';
import { ChatList } from './ChatList';

export default function App() {
  const [chatList, setChatList] = React.useState([]);

  React.useEffect(() => {
    fetch('https://my-json-server.typicode.com/codebuds-fk/chat/chats')
      .then((res) => res.json())
      .then((data) => {
        setChatList(data);
      });
  }, []);

  return (
    <div>{!chatList.length ? 'Loading' : <ChatList chatList={chatList} />}</div>
  );
}
