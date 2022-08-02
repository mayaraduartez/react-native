import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
              latitude: -31.32667, 
              longitude: -54.11235,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: -31.33303,
            longitude:  -54.10042}}
            title={"Museu Dom Diogo de Souza"}
            description={"museu de Bagé"}
         />
         <MapView.Marker
            coordinate={{latitude: -31.34761,
            longitude:  -54.06158}}
            title={"Cidade Cenográfica Santa Fé"}
            description={"cidade cenográfica de Bagé"}
         />
         <MapView.Marker
            coordinate={{latitude: -31.35293,
            longitude:  -54.05345}}
            title={"Vila de Santa Tereza"}
            description={"Santa Tereza em Bagé"}
         />
      </MapView>
 </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});