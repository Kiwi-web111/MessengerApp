import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatProvider } from './screens/ChatContext';
import ChatListScreen from './screens/ChatListScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatList" component={ChatListScreen} options={{ title: '好友列表' }} />
      <Stack.Screen name="Chat" component={ChatScreen} options={{ title: '聊天' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ChatProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Chats" component={ChatStack} options={{ title: '聊天' }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: '個人設定' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </ChatProvider>
  );
}
