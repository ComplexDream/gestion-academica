export default function TarjetaEstudiante({ nombre, carrera }) {
  return (
    <div className="tarjeta">
      <h3>{nombre}</h3>
      <p>Carrera: {carrera}</p>
    </div>
  );
}