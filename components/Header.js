import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>Lista de Tareas</Text>
        <Text style={styles.description}>
          Esta aplicación te ayudará a llevar un control de tus tareas a
          realizar.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black", // Cambia el color de fondo según tus preferencias
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.27)",
    elevation: 6,
    height: "20%", // Esto permite que el componente ocupe todo el alto de la pantalla
    width: "100%", // Aumenta el valor para hacer el componente más largo horizontalmente
    justifyContent: "center", // Esto centra el contenido verticalmente
  },
  headerContent: {
    alignItems: "center",
  },
  title: {
    fontSize: 24, // Ajusta el tamaño de fuente según tus preferencias
    color: "white", // Cambia el color del texto según tus preferencias
  },
  description: {
    fontSize: 16, // Ajusta el tamaño de fuente según tus preferencias
    color: "white", // Cambia el color del texto según tus preferencias
    textAlign: "center",
  },
});
