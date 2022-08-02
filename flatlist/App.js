import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Speech from "expo-speech";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    instagram: 'mayaraduartez',
    photo: 'https://instagram.fpoa33-1.fna.fbcdn.net/v/t51.2885-15/280962300_168176452273151_3266108476474215048_n.webp?stp=dst-jpg_e35&cb=2d435ae8-0fbdf7c6&_nc_ht=instagram.fpoa33-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=B3FnmvfjctAAX8v7huV&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgzNzAwNzU4NzU2MjA1NTE0OA%3D%3D.2-ccb7-5&oh=00_AT_Uk4YYiURNVi-TzdAqSoR7uVh04L_EapYXPo3mdCM4iQ&oe=62E60140&_nc_sid=30a2ef'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    instagram: 'lucascorreaofc',
    photo: 'https://instagram.fpoa33-1.fna.fbcdn.net/v/t51.2885-15/286736293_692051911865072_1569216404533360437_n.webp?stp=dst-jpg_e35_s240x240&cb=2d435ae8-0fbdf7c6&_nc_ht=instagram.fpoa33-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Cyz7HuTJ0_wAX-UQ9rn&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT_CuReyCTK9Qnzl_YPvliLQt1JgpNtILC8aqryYu5iztA&oe=62E6295A&_nc_sid=8fd12b'
    
  },
  
];



const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} 
    style={[styles.item, backgroundColor]}
  
  >
    
    <Text style={[styles.title, textColor]}>{item.nome}</Text>
    <Text style={[styles.title, textColor]}>{item.instagram}</Text>
    <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
    
    
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