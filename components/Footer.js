import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Footer = ({ porcentaje }) => {
  // No renderizar si porcentaje no es un número válido o es menor o igual a 0
  if (isNaN(porcentaje) || porcentaje <= 0) {
    return null;
  }

  return (
    <View style={styles.progressContainer}>
      <View
        style={{
          ...styles.progressBar,
          width: `${porcentaje * 100}%`,
        }}
      >
        <Text style={styles.progressBarText}>
          {Math.floor(porcentaje * 100)}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  progressBar: {
    backgroundColor: "green", // Color de la barra
    height: 18, // Ajusta la altura de la barra
    justifyContent: "center",
    borderRadius: 12
  },
  progressBarText: {
    color: "white", // Color del texto
    textAlign: "center", //Centrar texto
  },
});
