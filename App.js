import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Header, FormularioTareas, RegistroTareas, Footer } from "./components";
import { useCrud, useForm, useProgress } from "./hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

  const [descripcion, handleInputChange, setDescripcion] = useForm("");
  const { tareas, handleSubmit, handelCambiar, handelEliminar } = useCrud(
    descripcion,
    setDescripcion
  );
  const porcentaje = useProgress(tareas);

  useEffect(() => {
    // Guardar las tareas en AsyncStorage
    AsyncStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.contenedor}>
      <Header />
      <View>
        <FormularioTareas
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          descripcion={descripcion}
        />
      </View>

      {tareas.map((tarea, index) => {
        return (
          <RegistroTareas
            key={tarea.id}
            handelCambiar={handelCambiar}
            handelEliminar={handelEliminar}
            index={index}
            tarea={tarea}
          />
        );
      })}
      
      <Footer porcentaje={porcentaje} />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "flex-start",
//     justifyContent: "center",
//   },
// });

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  contenedor: {
    flex: 1,
    flexDirection: "row",
    alignItems : "flex-start",
    flexWrap: "wrap",
    gap: 6,
  }

});