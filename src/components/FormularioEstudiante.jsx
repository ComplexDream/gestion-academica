import { useState } from "react";

export default function FormularioEstudiante({ alRegistrar }) {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (!nombre.trim() || !carrera.trim()) return;
    alRegistrar({ id: Date.now(), nombre, carrera });
    setNombre("");
    setCarrera("");
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <input className="input-estilo" type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
      <input className="input-estilo" type="text" placeholder="Carrera" value={carrera} onChange={e => setCarrera(e.target.value)} required />
      <button className="boton-estilo" type="submit">Registrar</button>
    </form>
  );
}