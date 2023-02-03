import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Speech from "expo-speech";

const DATA = [
{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    nome: "Museu Dom Diogo de Souza - Lat: -31.33303 Long: -54.10042 "
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    nome: "Cidade Cenográfica de Santa Fé - Lat: -31.34761 Long: -54.06158",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    nome: "Centro Histórico Vila de Santa Tereza - Lat: -31.35293 Long: -54.05345",
  },
];



const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} 
    style={[styles.item, backgroundColor]}
  
  >
    
    <Text style={[styles.title, textColor]}>{item.nome}
    </Text>
  </TouchableOpacity>
);


const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#054f77' : '#007fff';
    const color = item.id === selectedId ? 'white' : 'black';


    return (
      <Item
        item={item}
        onPress={() => Speech.speak( item.nome , { language: "pt-BR" }) + setSelectedId(item.nome)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;