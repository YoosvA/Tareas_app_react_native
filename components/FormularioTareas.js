import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";

export const FormularioTareas = ({
  handleInputChange,
  handleSubmit,
  descripcion,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Agregar tarea</Text>
          <View style={styles.separator} />
          <View style={styles.form}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleInputChange}
              value={descripcion}
            />
            <Pressable
              onPress={handleSubmit}
              style={{ backgroundColor: "#287e21", borderRadius: 20, width:200, height:20 }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Agregar
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#0d0c0c",
    borderRadius: 8,
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    color: "white",
  },
  separator: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 8,
  },
  form: {},
  label: {
    fontSize: 16,
    color: "white",
    marginBottom: 10
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
});
