import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const RegistroTareas = ({
  tarea,
  index,
  handelCambiar,
  handelEliminar,
}) => {
  return (
    <View style={styles.container}>
      <View style={tarea.realizado ? styles.cardSuccess : styles.cardSecondary}>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Tarea: {index + 1}</Text>
          <Text style={styles.cardText}>{tarea.descripcion}</Text>
          <View style={styles.buttonContainer}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Pressable
                onPress={() => handelEliminar(tarea.id)}
                style={{
                  backgroundColor: "black",
                  borderRadius: 10,
                  width: 200,
                  height: 20,
                  marginBottom: 5
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Borrar
                </Text>
              </Pressable>
              <Pressable
                onPress={() => handelCambiar(tarea.id)}
                style={{
                  backgroundColor: "blue",
                  borderRadius: 10,
                  width: 200,
                  height: 20,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  {tarea.realizado
                    ? "Marcar como inconclusa"
                    : "Marcar como terminada"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  cardSuccess: {
    backgroundColor: "green",
    borderRadius: 8,
  },
  cardSecondary: {
    backgroundColor: "gray",
    borderRadius: 8,
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    color: "white",
  },
  cardText: {
    fontSize: 16,
    color: "white",
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
