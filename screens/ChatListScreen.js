import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { ChatContext } from './ChatContext';

export default function ChatListScreen({ navigation }) {
  const { chats, avatars } = useContext(ChatContext);
  const friends = Object.keys(chats);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={friends}
        keyExtractor={(name) => name}
        renderItem={({ item }) => {
          const lastMessage = chats[item][chats[item].length - 1]?.text || '';
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderColor: '#ccc',
              }}
              onPress={() => navigation.navigate('Chat', { friendName: item })}
            >
              {avatars[item] ? (
                <Image
                  source={{ uri: avatars[item] }}
                  style={{ width: 40, height: 40, borderRadius: 20, marginRight: 12 }}
                />
              ) : (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: '#ccc',
                    marginRight: 12,
                  }}
                />
              )}
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item}</Text>
                <Text style={{ color: '#555' }}>{lastMessage}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
