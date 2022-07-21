import React, { Component } from "react";
import { Text, TouchableOpacity, TextInput, View } from "react-native";
import MeuEstilo from "./src/meuestilo";
import * as Speech from "expo-speech";

export default class operacoesmatematicas extends React.Component {
  state = {
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0,
  };

  handleValor1 = (number) => {
    this.setState({ valor1: number });
  };
  handleValor2 = (number) => {
    this.setState({ valor2: number });
  };

  somar = (valor1, valor2, resultado) => {
    (resultado = parseFloat(valor1) + parseFloat(valor2)),
      Speech.speak(
        "Valor 1 digitado: " +
          valor1 +
          "\n Valor 2 Digitado: " +
          valor2 +
          "\n Resultado: " +
          resultado
      );
    alert(
      "Valor 1 digitado: " +
        valor1 +
        "\n Valor 2 Digitado: " +
        valor2 +
        "\n Resultado: " +
        resultado
    );
  };

  subtrair = (valor1, valor2, resultado) => {
    (resultado = parseFloat(valor1) - parseFloat(valor2)),
      Speech.speak(
        "Valor 1 digitado: " +
          valor1 +
          "\n Valor 2 Digitado: " +
          valor2 +
          "\n Resultado: " +
          resultado
      );
    alert(
      "Valor 1 digitado: " +
        valor1 +
        "\n Valor 2 Digitado: " +
        valor2 +
        "\n Resultado: " +
        resultado
    );
  };

  dividir = (valor1, valor2, resultado) => {
    (resultado = parseFloat(valor1) / parseFloat(valor2)),
      Speech.speak(
        "Valor 1 digitado: " +
          valor1 +
          "\n Valor 2 Digitado: " +
          valor2 +
          "\n Resultado: " +
          resultado
      );
    alert(
      "Valor 1 digitado: " +
        valor1 +
        "\n Valor 2 Digitado: " +
        valor2 +
        "\n Resultado: " +
        resultado
    );
  };

  pontoum= () => {
  Speech.speak("teste",{ language: "pt-BR" });
  };

  render() {
    return (
      <View style={MeuEstilo.container}>
        <TextInput
          style={MeuEstilo.input}
          underlineColorAndroid="transparent"
          placeholder="Digite o Valor 1"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleValor1}
          keyboardType="numeric"
        />

        <TextInput
          style={MeuEstilo.input}
          underlineColorAndroid="transparent"
          placeholder="Digite o Valor 2"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleValor2}
          keyboardType="numeric"
        />

        <TouchableOpacity //somar
          style={MeuEstilo.submitButton}
          onPress={() =>
            this.somar(
              this.state.valor1,
              this.state.valor2,
              this.state.resultado
            )
          }
        >
          <Text style={MeuEstilo.submitButtonText}>Somar</Text>
        </TouchableOpacity>

        <TouchableOpacity //subtrair
          style={MeuEstilo.submitButton2}
          onPress={() =>
            this.subtrair(
              this.state.valor1,
              this.state.valor2,
              this.state.resultado
            )
          }
        >
          <Text style={MeuEstilo.submitButtonText}>Subtrair</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={MeuEstilo.submitButton3}
          onPress={() =>
            this.dividir(
              this.state.valor1,
              this.state.valor2,
              this.state.resultado
            )
          }
        >
          <Text style={MeuEstilo.submitButtonText}>Dividir</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={MeuEstilo.submitButton4}
          onPress={() =>
            this.pontoum()
          }
        >
          <Text style={MeuEstilo.submitButtonText}>Multiplicar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
