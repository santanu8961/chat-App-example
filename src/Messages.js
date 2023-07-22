import React from 'react';
import './style.css';
export const Messages = ({ loadedChat }) => {
  return (
    <div style={{ position: 'fixed', width: '50vw' }}>
      {loadedChat.messageList ? (
        <div style={{ marginLeft: '5px', position: 'sticky' }}>
          <h2>{loadedChat.title}</h2>
          <div style={{ backgroundColor: '#FAF9F6', height: '80vh' }}>
            {loadedChat.messageList.map(({ message, sender }) => (
              <div
                className={sender === 'USER' ? 'user' : 'sender'}
                style={{
                  height: '10vh',
                  margin: '0 0 2vh 0',
                  width: '20vw',
                  borderRadius: '5px',
                }}
              >
                {message}
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: '#FAF9F6', height: '20vh' }}>
            <input type={'text'} />
            <button>Send</button>
          </div>
        </div>
      ) : (
        'No messages to show'
      )}
    </div>
  );
};

