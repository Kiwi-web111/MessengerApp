import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState({
    小明: [{ id: 1, sender: '小明', text: '嗨！最近好嗎？' }],
    小華: [{ id: 2, sender: '小華', text: 'QQ' }],
    小美: [{ id: 3, sender: '小美', text: '我剛看了一部電影！' }],
    小強: [{ id: 4, sender: '小強', text: '工作好累！' }],
    小李: [{ id: 5, sender: '小李', text: '這週一起去健身吧！' }],
  });

  // 每個好友的頭像
  const [avatars, setAvatars] = useState({
    小明: null,
    小華: null,
    小美: null,
    小強: null,
    小李: null,
  });
  const [myAvatar, setMyAvatar] = useState(null);

  return (
    <ChatContext.Provider value={{ chats, setChats, avatars, myAvatar, setMyAvatar }}>
      {children}
    </ChatContext.Provider>
  );

  return (
    <ChatContext.Provider value={{ chats, setChats, avatars, setAvatars }}>
      {children}
    </ChatContext.Provider>
  );
};
