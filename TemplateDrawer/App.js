import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Flatlist from './flatlist/Flatlist'
import Mapa from './mapa/Mapa'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}


function FlatlistScreen({ navigation }) {
  return (
   <Flatlist></Flatlist>
  );
}

function MapaScreen({ navigation }) {
  return (
   <Mapa></Mapa>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Lista" component={FlatlistScreen} />
        <Drawer.Screen name="Mapa" component={MapaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}