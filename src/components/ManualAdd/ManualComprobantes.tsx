import { Comprobante } from "../../types/types";
import { useForm } from "react-hook-form";

interface structure {
  tipo: string;
  empresa: string;
  data: Comprobante[];
  setData: () => void;
}

export default function ManualComprobantes(props: structure) {
  const notaDefault: string =
    "Su comprobante electrónico de transacción ha sido generadoexitosamente. Puede verificar y consultar losdetalles en la página oficial de Banxico para obtener información adicional. Más detalles en: https://www.banxico.org.mx/comprobante-electronico.html";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (info: any) => {
    if (props.empresa === "Tesored") {
      console.log("va por tesored!");
      console.log(info);
      const newComprobante: Comprobante = {
        operacion: info.operacion,
        beneficiario: info.beneficiario,
        institucion: info.institucion,
        cuenta: info.cuenta,
        referencia: info.referencia,
        concepto: info.concepto,
        clave: info.clave,
        nota: notaDefault,
        fecha: "",
        hora: "",
        amount: info.cantidad,
        company: "Tesored",
        nombreEmpresa: "TESORED, S.A. DE C.V.",
        registroEmpresa: "Registro CNBV 44244",
        direccionEmpresa:
          "AV. CENTRAL 206 PISO 2 COL.SAN PEDRO DE LOS PINOS, ALVARO OBREGON, C.P. 01180, CIUDAD DE MÉXICO",
      };
      props.setData((prevData) => [...prevData, newComprobante]);

    } else {
      console.log("vamos por traxwire");
      console.log(info);
      const newComprobante: Comprobante = {
        operacion: info.movimiento,
        beneficiario: info.ordenante,
        institucion: "",
        cuenta: "",
        referencia: info.referenciaNum,
        concepto: info.referencia,
        clave: info.clave,
        nota: notaDefault,
        fecha: "si hay",
        hora: "",
        amount: info.cantidad,
        company: "Traxwire",
                  nombreEmpresa: "Taxwire, SA de CV",
                  registroEmpresa: "Registro CNBV 22493",
                  direccionEmpresa:
                    "San Lorenzo 153 int 1006, Col. Tlacoquemecatl, 03200, CDMX",
                    cargo: info.datos !== "cargo" ? info.cargo : "-",
                    abono: info.datos !== "abono" ? info.abono : "-",
                    saldo: info.saldo,            
        };
      props.setData((prevData) => [...prevData, newComprobante]);




    }
  };
  return (
    <div>
      {" "}
      <h1>Carga Manual de Comprobantes</h1>
      {props.empresa === "Tesored" ? (
        <>
          <p>Tesored</p>
          <form onSubmit={handleSubmit(onSubmit)} className="FormBlock">
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="">Ingresar Operacion</label>
            <input
              type="text"
              {...register("operacion", {
                required: true,
              })}
              placeholder="Transferencias a otros bancos nacionales - SPEI"
              defaultValue={"Transferencias a otros bancos nacionales - SPEI"}
            />
            {errors.operacion && <span>El campo es obligatorio</span>}

            <label htmlFor="">Beneficiario</label>
            <input
              type="text"
              {...register("beneficiario", {
                required: true,
              })}
              placeholder="CONSULTORES LEGALES ESPECIALIZADOS HUANCAYO"
            />
            {errors.beneficiario && <span>El campo es obligatorio</span>}

            <label htmlFor="">Institución destino</label>
            <input
              type="text"
              {...register("institucion", {
                required: true,
              })}
              placeholder="CONSULTORES LEGALES ESPECIALIZADOS HUANCAYO"
            />
            {errors.institucion && <span>El campo es obligatorio</span>}

            <label htmlFor="">Cuenta del beneficiario</label>
            <input
              type="text"
              {...register("cuenta", {
                required: true,
              })}
              placeholder="CONSULTORES LEGALES ESPECIALIZADOS HUANCAYO"
            />
            {errors.cuenta && <span>El campo es obligatorio</span>}

            <label htmlFor="">Referencia</label>
            <input
              type="text"
              {...register("referencia", {
                required: true,
              })}
              placeholder="R343242342343"
            />
            {errors.referencia && <span>El campo es obligatorio</span>}

            <label htmlFor="">Concepto de Pago</label>
            <input
              type="text"
              {...register("concepto", {
                required: true,
              })}
              placeholder="R343242342343"
            />
            {errors.concepto && <span>El campo es obligatorio</span>}

            <label htmlFor="">Clave de rastreo</label>
            <input
              type="text"
              {...register("clave", {
                required: true,
              })}
              placeholder="FT232323"
            />
            {errors.clave && <span>El campo es obligatorio</span>}

            <label htmlFor="">Cantidad</label>
            <input
              type="number"
              {...register("cantidad", {
                required: true,
              })}
              placeholder="$324.5"
            />
            {errors.cantidad && <span>El campo es obligatorio</span>}

            <input className="SendButton" type="submit" value={"Agregar"} />
          </form>
        </>
      ) : (
        <>
          <h2>Traxwire</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="FormBlock">
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="">Ingresar Movimiento</label>
            <input
              type="text"
              {...register("movimiento", {
                required: true,
              })}
              placeholder="Transferencias a otros bancos nacionales - SPEI"
              defaultValue={"Transferencias a otros bancos nacionales - SPEI"}
            />
            {errors.movimiento && <span>El campo es obligatorio</span>}

            <label htmlFor="">Ordenante</label>
            <input
              type="text"
              {...register("ordenante", {
                required: true,
              })}
              placeholder="CONSULTORES LEGALES ESPECIALIZADOS HUANCAYO"
            />
            {errors.ordenante && <span>El campo es obligatorio</span>}

            <label htmlFor="">Referencia numérica</label>
            <input
              type="text"
              {...register("referenciaNum", {
                required: true,
              })}
              placeholder="R343242342343"
            />
            {errors.referenciaNum && <span>El campo es obligatorio</span>}

            <label htmlFor="">Referencia leyenda</label>
            <input
              type="text"
              {...register("referencia", {
                required: true,
              })}
              placeholder="R343242342343"
            />
            {errors.referencia && <span>El campo es obligatorio</span>}

            <label htmlFor="">Clave de rastreo</label>
            <input
              type="text"
              {...register("clave", {
                required: true,
              })}
              placeholder="FT232323"
            />
            {errors.clave && <span>El campo es obligatorio</span>}

            <label htmlFor="">Cantidad</label>
            <input
              type="number"
              {...register("cantidad", {
                required: true,
              })}
              placeholder="$324.5"
            />
            {errors.cantidad && <span>El campo es obligatorio</span>}

            <label htmlFor="">Tipo de transacción</label>
            <select id="empresa" {...register("datos")}>
              <option value="cargo">Cargo</option>
              <option value="abono">Abono</option>
            </select>
            {errors.datos && <span>El campo es obligatorio</span>}

            <label htmlFor="">Saldo</label>
            <input
              type="number"
              {...register("saldo", {
                required: true,
              })}
              placeholder="$1123.5"
            />
            {errors.saldo && <span>El campo es obligatorio</span>}

            <input className="SendButton" type="submit" value={"Agregar"} />
          </form>
        </>
      )}
    </div>
  );
}
