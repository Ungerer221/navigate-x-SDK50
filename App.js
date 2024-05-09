import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import PhotosScreen from './screens/PhotosScreen';
import PrivateScreen from './screens/PrivateScreen';
import DevelopmentScreen from './screens/DevelopmentScreen';

// the tab navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Feather } from '@expo/vector-icons';

// function HomeScreen() {
//   return (
//       <HomeScreen />
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Add navigation here
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // * remember you have the change the icon names
            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Photo') {
              iconName = focused ? 'image-outline' : 'image-outline';
            } else if (route.name === 'Private') {
              iconName = focused ? 'glasses-outline' : 'glasses-outline';
            } else if (route.name === 'Dev') {
              iconName = focused ? 'code-outline' : 'code-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Photo" component={PhotosScreen} />
        <Tab.Screen name="Private" component={PrivateScreen} />
        <Tab.Screen name="Dev" component={DevelopmentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    // <HomeScreen />
  );
}

