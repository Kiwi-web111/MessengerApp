import React, { useContext } from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ChatContext } from './ChatContext';

export default function ProfileScreen() {
  const { myAvatar, setMyAvatar } = useContext(ChatContext);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert('需要相簿權限才能選擇頭像');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setMyAvatar(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>我的頭像設定</Text>
      {myAvatar ? (
        <Image source={{ uri: myAvatar }} style={{ width: 120, height: 120, borderRadius: 60 }} />
      ) : (
        <View style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: '#ccc' }} />
      )}
      <Button title="選擇頭像" onPress={pickImage} />
    </View>
  );
}
