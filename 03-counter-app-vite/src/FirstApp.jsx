import PropTypes from "prop-types";

//Props, propiedades de los componentes encapsuladas en un ojeto.
//No va a ser reprocesado o renderizado todo lo que este fuera del componente.
const getArray = () => ["Mateito", "Esposito", "Natalita"];

export const FirstApp = ({ title = "La tierra", subtitle = "La tierra gira", name }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle + 1}</h2>
      <h3>{name}</h3>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay subtitulo",
  name: "Mateito",
};
