import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './screens/ChatScreen/ChatScreen';


export default function App() {
  return (
    <View >
      <ChatScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

