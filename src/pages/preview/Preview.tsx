import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Papa from "papaparse";
import { Comprobante, FormatToSend } from "../../types/types";
import axios from "axios";
import { Audio } from "react-loader-spinner";

interface CsvData {
  [key: string]: string;
}

export default function Preview() {
  const { empresa, correo } = useContext(UserContext);
  const [data, setData] = useState<Comprobante[]>();
  const [dataConverted] = useState<CsvData[]>([]);
  const [fileToUpload, setFileToUpload] = useState("");
  const [uploadedFile, setUploadedFile] = useState(false);
  const notaDefault: string =
    "Su comprobante electrónico de transacción ha sido generadoexitosamente. Puede verificar y consultar losdetalles en la página oficial de Banxico para obtener información adicional. Más detalles en: https://www.banxico.org.mx/comprobante-electronico.html";

  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setDownloadedJson(false);
    //setErrorsList(null);
    const file = event.target.files?.[0];
    // console.log("archivo", file);
    // console.log("archivo nombre", file.name);

    setFileToUpload(file.name);

    console.log("changing data right now");
    if (file) {
      if (empresa === "Tesored") {
        console.log("va por tesored!");
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            //console.log("results ", results.data);
            if (results.data.length > 0) {
              let comprobantes: Comprobante[] = [];
              for (let i = 0; i < results.data.length; i++) {
                const referencia = results.data[i]["Id Transaccion"];
                const var2 = results.data[i]["Fecha Recepcion"];

                const var3 = results.data[i]["Importe Destino"];
                const var4 = results.data[i]["Divisa Destino"];
                const fechaEstado = results.data[i]["Fecha Estado"];
                console.log("fecha normal ", fechaEstado);
                const fechaCompleta = fechaEstado.split(" ");
                console.log("fecha separada ", fechaCompleta);

                const var6 = results.data[i]["Estado"];
                const operacion = results.data[i]["Razon Estado"];
                const var8 = results.data[i]["ConfirmationNM"];
                const var9 = results.data[i]["Tipo Cuenta"];
                const cuenta = results.data[i]["Cuenta"];
                const var11 = results.data[i]["Agente"];
                const institucion = results.data[i]["Acronimo Banco"];
                const var13 = results.data[i]["ID Movimiento Venta"];
                const amount = results.data[i]["Importe Origen"];
                const var15 = results.data[i]["Divisa Origen"];
                const var16 = results.data[i]["Tipo Cambio"];
                const var17 = results.data[i]["Codigo Estado Origen"];
                const var18 = results.data[i]["Nombre Ord"];
                const var19 = results.data[i]["Segundo Nom Ord"];
                const var20 = results.data[i]["Apellido Ord"];
                const var21 = results.data[i]["Apellido Mat Ord"];
                const var22 = results.data[i]["Direccion Ord"];
                const var23 = results.data[i]["Ciudad Ord"];
                const var24 = results.data[i]["Estado Ord"];
                const var25 = results.data[i]["Pais Ord"];
                const var26 = results.data[i]["Codigo Zip Ord"];
                const var27 = results.data[i]["Telefono Ord"];
                const var28 = results.data[i]["Nombre Ben"];
                const var29 = results.data[i]["Segundo Nom Ben"];
                const var30 = results.data[i]["Apellido Ben"];
                const var31 = results.data[i]["Apellido Mat Ben"];
                const var32 = results.data[i]["Direccion Ben"];
                const var33 = results.data[i]["Ciudad Ben"];
                const var34 = results.data[i]["Estado Ben"];
                const var35 = results.data[i]["Pais Ben"];
                const var36 = results.data[i]["Codigo Zip Ben"];
                const var37 = results.data[i]["Telefono Ben"];
                const beneficiario = results.data[i]["Titular"];
                console.log("beneficiario ", beneficiario);
                const var39 = results.data[i]["Idperson"];
                const var40 = results.data[i]["Tipo Cambio Banxico"];
                const var41 = results.data[i]["Agencia"];
                const var42 = results.data[i]["Sub Estado T329"];
                const clave = results.data[i]["ClaveRastreoSpei"];
                const conceptoPago = results.data[i]["Concepto_de_pago"];
                const comprobante: Comprobante = {
                  operacion: operacion,
                  beneficiario: beneficiario,
                  institucion: institucion,
                  cuenta: cuenta,
                  referencia: referencia,
                  concepto: conceptoPago,
                  clave: clave,
                  nota: notaDefault,
                  fecha: fechaCompleta[0],
                  hora: fechaCompleta[1],
                  amount: amount,
                  company: "Tesored",
                  nombreEmpresa: "Taxwire, SA de CV",
                  registroEmpresa: "Registro CNBV 22493",
                  direccionEmpresa:
                    "San Lorenzo 153 int 1006, Col. Tlacoquemecatl, 03200, CDMX",
                };
                comprobantes.push(comprobante);
                console.log("lista de comprobantes ", comprobantes);
              }
              setData(comprobantes);
            }
          },
        });
        setUploadedFile(true);
      } else {
        console.log("it is traxwire!");
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            //console.log("results traxwire ", results.data);
            if (results.data.length > 0) {
              let comprobantes: Comprobante[] = [];
              for (let i = 0; i < results.data.length; i++) {
                const abono = results.data[i]["Abono"];
                const cargo = results.data[i]["Cargo"];
                const claveRastreo = results.data[i]["Clave de Rastreo"];
                const divisaDestino = results.data[i]["Divisa Destino"];
                const fecha = results.data[i]["Fecha"];
                const movimiento = results.data[i]["Movimiento"];
                const ordenante = results.data[i]["Ordenante"];
                const refExterna = results.data[i]["Ref. Externa"];
                const refNumerica = results.data[i]["Ref. Numerica"];
                const referencia = results.data[i]["Referencia"];
                const leyenda = results.data[i]["Referencia Leyenda"];
                const saldo = results.data[i]["Saldo"];
                const comprobante: Comprobante = {
                  operacion: movimiento,
                  beneficiario: ordenante,
                  institucion: "",
                  cuenta: "",
                  referencia: refNumerica,
                  concepto: leyenda,
                  clave: claveRastreo,
                  nota: "",
                  fecha: fecha,
                  hora: "",
                  amount: "",
                  company: "Traxwire",
                  nombreEmpresa: "Taxwire, SA de CV",
                  registroEmpresa: "Registro CNBV 22493",
                  direccionEmpresa:
                    "San Lorenzo 153 int 1006, Col. Tlacoquemecatl, 03200, CDMX",
                  cargo: cargo !== "" ? cargo : "-",
                  abono: abono !== "" ? abono : "-",
                  saldo: saldo,
                };
                comprobantes.push(comprobante);
                //console.log("lista de comprobantes ", comprobantes);
              }
              console.log(comprobantes[0]);
              setData(comprobantes);
            }
          },
        });
        setUploadedFile(true);
      }
      console.log("nothing happen");
    }
  };

  function convertJsonAndSend() {
    console.log("this is the data raw! ", data);
    //convertir la informacion al formato aceptado por la api que cree

    if (data.length > 0) {
      try {
        const dataInfo: FormatToSend = {
          emailToSend: correo,
          comprobantes: data,
        };
        const config = {
          method: "post",
          maxBodyLength: Infinity,
          // url: process.env.EMAI_SERVER_URL,
          url: "http://localhost:3000/buildcomprobante/generate",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: dataInfo,
        };
        setLoading(true);
        axios
          .request(config)
          .then((response) => {
            //console.log(JSON.stringify(response.data));
            console.log("response status ", response.status);
            console.log("response ", response);
            if (response.status === 200) {
              console.log("yes it is 200");
              setLoading(false);
              alert("Comprobantes enviados con éxito!");
              
            }
          })
          .catch((error) => {
            console.log(error);
            return {
              message:
                "Error al momento de enviar correos electrónicos a los destinatarios!",
              code: "02",
            };
          });
      } catch (error) {
        setLoading(false);
        console.log("error al enviar comprobante!", error);
        alert(
            `Error: ${error}`
        );

      }
    } else {
      setLoading(false);
      alert(
        "El archivo está vacío o no cumple con los criterios para convertirlo!"
      );

    }
  }

  const eliminarComprobante = (referencia: string) => {
    // Filtra el arreglo eliminando el valor de referencia
    console.log("viene data ", data);
    const nuevoArreglo = data.filter((item) => item.referencia !== referencia);
    // Actualiza el estado con el nuevo arreglo
    console.log("eliminando!");
    setData(nuevoArreglo);
  };
  const parent = { width: `60em`, height: `100%` };
  const child = { width: `30em`, height: `100%` };
  return (
    <div className="MainBlock">
      {loading ? (
        <>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="#fff"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </>
      ) : (
        <>
        <div className="FormBlock">
        <h1> Visualización Comprobantes</h1>
        <p>
          {" "}
          <b>Empresa:</b> {empresa}
        </p>
        <p>Suba el archivo a convertir</p>
        <input
          className="convertidor-uploadFile"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          name="Subir un archivo"
          placeholder="Subir archivo"
        />

        <p>Aqui va un componente para mostrar la lista de los comprobantes</p>
        <button
          onClick={() => {
            convertJsonAndSend();
          }}
        >
          Enviar Reporte
        </button>
      </div>
      <div>
        <h1>Datos Disponibles</h1>
        <div className="ComprobantesBlock">
          {data ? (
            <div className="ComprobantesBlock">
              {data.map((comprobante) => {
                return (
                  <>
                    <div className="Comprobante" key={comprobante.referencia}>
                      <p>
                        {" "}
                        <b> Beneficiario:</b> {comprobante.beneficiario}
                      </p>
                      <p>
                        <b> Institución: </b> {comprobante.institucion}
                      </p>
                      <p>
                        <b> Concepto: </b> {comprobante.concepto}
                      </p>
                      <p>
                        {" "}
                        <b> Cantidad:</b> {comprobante.amount}
                      </p>
                      <p>
                        <b> Fecha: </b> {comprobante.fecha}
                      </p>
                      <p>
                        {" "}
                        <b> Hora:</b> {comprobante.hora}
                      </p>
                      <button
                        onClick={() => {
                          console.log("delete ", comprobante.referencia);
                          eliminarComprobante(comprobante.referencia);
                        }}
                      >
                        Remover
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            <>
              <p>No hay información que mostrar</p>
            </>
          )}
        </div>
      </div>
        </>
      )}
      
    </div>
  );
}
