import { useState } from "react";
import FormularioEstudiante from "./FormularioEstudiante";
import TarjetaEstudiante from "./TarjetaEstudiante";

export default function ListaEstudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = (nuevoEstudiante) => {
    setEstudiantes([...estudiantes, nuevoEstudiante]);
  };

  return (
    <div className="contenedor-principal">
      <h1 className="titulo">Gestión Académica</h1>
      
      <div className="seccion-contenedor">
        <FormularioEstudiante alRegistrar={agregarEstudiante} />
      </div>

      <div className="seccion-contenedor">
        <h2 className="subtitulo">Estudiantes Matriculados ({estudiantes.length})</h2>
        <div className="lista-tarjetas">
          {estudiantes.map(est => (
            <TarjetaEstudiante key={est.id} nombre={est.nombre} carrera={est.carrera} />
          ))}
        </div>
      </div>
    </div>
  );
}