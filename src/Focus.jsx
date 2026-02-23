import { useRef, useState, useEffect } from "react";

export const Focus = () => {
  const inputRef = useRef();
  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: ""
  });
  const [datosEnviados, setDatosEnviados] = useState(null);

  // useEffect para hacer focus en el primer input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setDatosEnviados(formData);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Formulario de Registro</h1>
      <hr />
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <input
            ref={inputRef}
            type="text"
            name="matricula"
            placeholder="Matrícula"
            className="form-control"
            value={formData.matricula}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="form-control"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            className="form-control"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <input
            type="number"
            name="edad"
            placeholder="Edad"
            className="form-control"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <input
            type="text"
            name="universidad"
            placeholder="Universidad"
            className="form-control"
            value={formData.universidad}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <input
            type="text"
            name="carrera"
            placeholder="Carrera"
            className="form-control"
            value={formData.carrera}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" style={styles.button}>
          Enviar
        </button>
      </form>

      {/* Mostrar datos enviados */}
      {datosEnviados && (
        <div style={styles.resultContainer}>
          <h2>Datos Registrados:</h2>
          <p><strong>Matrícula:</strong> {datosEnviados.matricula}</p>
          <p><strong>Nombre:</strong> {datosEnviados.nombre}</p>
          <p><strong>Apellidos:</strong> {datosEnviados.apellidos}</p>
          <p><strong>Edad:</strong> {datosEnviados.edad}</p>
          <p><strong>Universidad:</strong> {datosEnviados.universidad}</p>
          <p><strong>Carrera:</strong> {datosEnviados.carrera}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  form: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "2rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9"
  },
  formGroup: {
    marginBottom: "1rem"
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    marginTop: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem"
  },
  resultContainer: {
    maxWidth: "500px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#e8f5e9",
    borderRadius: "8px",
    borderLeft: "4px solid #4caf50"
  }
}
