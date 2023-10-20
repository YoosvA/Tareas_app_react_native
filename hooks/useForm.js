// import { useState } from "react"

// export const useForm = (estadoInicial) => {
//     const [descripcion, setDescripcion] = useState(estadoInicial);

//     const handleInputChange = (evento) => {
//         setDescripcion(evento.target.value);
//     };

//     return [descripcion, handleInputChange, setDescripcion]
// }

import { useState } from "react";

export const useForm = (estadoInicial) => {
  const [descripcion, setDescripcion] = useState(estadoInicial);

  const handleInputChange = (nuevoValor) => {
    setDescripcion(nuevoValor);
  };

  return [descripcion, handleInputChange, setDescripcion];
};
