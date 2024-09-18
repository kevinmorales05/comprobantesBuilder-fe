import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Papa from "papaparse";

interface CsvData {
  [key: string]: string;
}

export default function Preview() {
  const { empresa, correo } = useContext(UserContext);
  const [data, setData] = useState<CsvData[]>([]);
  const [dataConverted] = useState<CsvData[]>([]);
  const [fileToUpload, setFileToUpload] = useState("");
  const [uploadedFile, setUploadedFile] = useState(false);

  //const context = useContext(UserContext);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setDownloadedJson(false);
    //setErrorsList(null);
    const file = event.target.files?.[0];
    // console.log("archivo", file);
    // console.log("archivo nombre", file.name);

    setFileToUpload(file.name);
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          //console.log("results ", results);
          setData(results.data as CsvData[]);
        },
      });
      setUploadedFile(true);
    }
  };

  function convertJsonAndSend() {
    console.log('this is the data raw! ', data);
    //convertir la informacion al formato aceptado por la api que cree
    //integrar el servicio para enviar el correo
   }

  return (
    <div>
      <h1> Preview</h1>
      <p>{empresa}</p>
      <p>Suba el archivo a convertir</p>
      <input
        className="convertidor-uploadFile"
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        name="Subir un archivo"
      />

      <p>Aqui va un componente para mostrar la lista de los comprobantes</p>
      <button onClick={()=> {convertJsonAndSend()}}>Enviar Reporte</button>
    </div>
  );
}
