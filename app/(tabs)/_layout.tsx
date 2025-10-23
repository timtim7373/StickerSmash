import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#7aff3dff',
            headerStyle: {
                backgroundColor: '#25292e',
            },
            headerShadowVisible: false,
            headerTintColor: '#ffffffff',
            tabBarStyle: {
                backgroundColor: '#25292e',
            },
        }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={28} />
            ),
       }} />
      <Tabs.Screen 
        name="about" 
        options={{ 
            title: 'About',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={28}/>
            ),
         }} 
         />
    </Tabs>
  );
}
