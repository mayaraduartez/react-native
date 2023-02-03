import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Flatlist from './flatlist/Flatlist'
import Mapa from './mapa/Mapa'
import Mapa2 from './mapa/Mapa2'


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

function Mapa2Screen({ navigation }) {
  return (
   <Mapa2></Mapa2>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Institutos e Universidades Publicas" component={MapaScreen} />
        <Drawer.Screen name="Faculdades Particulares" component={Mapa2Screen} />
        <Drawer.Screen name="Lista de Todas" component={FlatlistScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}