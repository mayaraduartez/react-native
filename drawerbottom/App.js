import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Mapa from './mapa/Mapa'
import Mapa2 from './mapa/Mapa2'
import Mapa3 from './mapa/Mapa3'
import Mapa4 from './mapa/Mapa4'
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MapaScreen({ navigation }) {
  return (
   <Mapa></Mapa>
  );
}

function Mapa2Screen({ navigation }) {
  return (
   <Mapa2></Mapa2>
  );
}

function Mapa3Screen({ navigation }) {
  return (
   <Mapa3></Mapa3>
  );
}

function Mapa4Screen({ navigation }) {
  return (
   <Mapa4></Mapa4>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Settings" component={MapaScreen} 
        options={{
        tabBarIcon: () => (<Icon name="md-airplane-outline" size={30} color="blue" />)
      }}/>
        <Tab.Screen name="Mapa" component={Mapa2Screen} 
        options={{
          tabBarIcon: () => (<Image source={require("./assets/1.png")} style={{width: 20, height: 20}} />)
      }}/>
      <Tab.Screen name="Mapa2" component={Mapa3Screen} 
        options={{
          tabBarIcon: () => (<Image source={require("./assets/2.png")} style={{width: 20, height: 20}} />)
      }}/>
        <Tab.Screen name="Settings2" component={Mapa4Screen} 
        options={{
        tabBarIcon: () => (<Icon name="md-airplane" size={30} color="black" />)
      }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}