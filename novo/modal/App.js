import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Flatlist from "./Flatlist";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalFlatlistVisible, setModalFlatlistVisible] = useState(false);
  const [ItemLista, setItemLista] = 
  useState ({...ItemLista,
      id:"",
      title: ""
  })

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal fechado"); //mostra mensagem do alert ao clicar no voltar na tl do celular
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>FECHA MODAL</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* separador */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalFlatlistVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed."); //mostra mensagem do alert ao clicar no voltar na tl do celular
          setModalVisible(!modalFlatlistVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Flatlist
            setModalFlatlistVisible={setModalFlatlistVisible}
            setItemLista={setItemLista}
            ></Flatlist>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)} //TRUE OR FALSE
      >
        <Text style={styles.textStyle}>MODAL</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalFlatlistVisible(true)} //TRUE OR FALSE
      >
        <Text style={styles.textStyle}>FLATLIST</Text>
      </Pressable>
      <Text>Id: {ItemLista.id}</Text>
      <Text>Titulo: {ItemLista.title}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;