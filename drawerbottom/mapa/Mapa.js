import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
              latitude: -31.33136,
              longitude: -54.11509,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: -31.30644, 
            longitude:  -54.06435}}
            title={"Unipampa"}
            description={"Unipampa, Bagé"}
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