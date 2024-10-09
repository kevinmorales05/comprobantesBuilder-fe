import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { setCorreo, setEmpresa, setDatos } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    setCorreo(data.emailToSend);
    setEmpresa(data.empresa);
    setDatos(data.datos);
    navigate("/preview");
  };
  return (
    <div className="MainBlock">
      <h1>Generador de Comprobantes</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="FormBlock">
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="">Escoger la Empresa</label>
        <select id="empresa" {...register("empresa")}>
          <option value="Tesored">Tesored</option>
          <option value="Traxwire">TraxWire</option>
        </select>
        {errors.empresa && <span>El campo es obligatorio</span>}
        <label htmlFor="">Ingresar Datos</label>
        <select id="empresa" {...register("datos")}>
          <option value="auto">Automático</option>
          <option value="manual">Manual</option>
        </select>
        {errors.datos && <span>El campo es obligatorio</span>}

        <label htmlFor="">Escribir el correo del destinatario</label>
        <input
          type="email"
          {...register("emailToSend", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Por favor ingrese un correo electrónico válido.",
            },
          })}
        />
        {errors.emailToSend && <span>El campo es obligatorio</span>}

        <input className="SendButton" type="submit" />
      </form>
    </div>
  );
};
