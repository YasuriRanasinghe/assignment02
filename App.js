import React from 'react';
import {Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import ImagesScreen from './screens/ImagesScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) =>({
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if(route.name === 'Home'){
            iconName = focused ? 'ios-home' : 'ios-home-outline';
            size = focused ? size + 8  : size + 5;
          } else if (route.name ==='Discover') {
            iconName = focused ? 'search-sharp' : 'search-outline';
            size = focused ? size + 8  : size + 5;
          } else if (route.name === 'Images') {
            iconName = focused ? 'images-sharp' : 'images-outline';
            size = focused ? size + 8  : size + 5;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
            size = focused ? size + 8  : size + 5;
          }
          return <Ionic name={iconName} size={size} colour={colour}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor:'black',
        inactiveTinColor:'black',
        showLabel: false,
        style: {
          backgroundColor: '#f8f8ff',
          height: 60
        },
      }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Images" component={ImagesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
