import React, { useReducer } from "react";
import { tareaReducer } from "../reducers/tareaReducer";

export const useCrud = (descripcion, setDescripcion) => {
  const init = () => {
    return JSON.parse(localStorage.getItem("tareas")) || [];
  };

  const [tareas, dispatch] = useReducer(tareaReducer, [], init);

  const handleSubmit = () => {
    if (descripcion.trim() === "") {
      return;
    }

    const tareaNueva = {
      id: new Date().getTime(),
      descripcion: descripcion,
      realizado: false,
    };

    const action = {
      type: "agregar",
      payload: tareaNueva,
    };
    dispatch(action);
    setDescripcion("");
  };

  const handelCambiar = (id) => {
    dispatch({
      type: "cambiar",
      payload: id,
    });
  };

  const handelEliminar = (id) => {
    dispatch({
      type: "borrar",
      payload: id,
    });
  };

  return {
    tareas,
    handleSubmit,
    handelCambiar,
    handelEliminar,
  };
};
