import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, Image } from 'react-native';
import { ChatContext } from './ChatContext';

export default function ChatScreen({ route }) {
  const { friendName } = route.params;
  const { chats, setChats, avatars, myAvatar } = useContext(ChatContext);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    const newMessage = { id: Date.now(), sender: '你', text: input };
    setChats({
      ...chats,
      [friendName]: [...chats[friendName], newMessage],
    });
    setInput('');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={chats[friendName]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
            {item.sender === '你' && myAvatar ? (
              <Image source={{ uri: myAvatar }} style={{ width: 30, height: 30, borderRadius: 15, marginRight: 8 }} />
            ) : item.sender !== '你' ? (
              <Image source={avatars[friendName]} style={{ width: 30, height: 30, borderRadius: 15, marginRight: 8 }} />
            ) : null}
            <Text>{item.sender}: {item.text}</Text>
          </View>
        )}
      />
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="輸入訊息..."
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8 }}
      />
      <Button title="送出" onPress={sendMessage} />
    </View>
  );
}
