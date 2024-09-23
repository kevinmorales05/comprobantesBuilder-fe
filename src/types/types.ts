export interface FormatToSend {
  emailToSend: string;
  comprobantes: Comprobante[];
}

export interface Comprobante {
  operacion: string;
  beneficiario: string;
  institucion: string;
  cuenta: string;
  referencia: string;
  concepto: string;
  clave: string;
  nota: string;
  fecha: string;
  hora: string;
  amount: string;
  company: string;
  nombreEmpresa: string;
  registroEmpresa: string;
  direccionEmpresa: string;
  //nuevos campos nuevo formato
  cargo?: string;
  abono?: string;
  saldo?: string;
}

export interface ComprobanteInput {

}

{
    "Id Transaccion": "10244516",
    "Fecha Recepcion": "17/09/2024 17:42:20",
    "Importe Destino": "600000",
    "Divisa Destino": "MXP",
    "Fecha Estado": "17/09/2024 18:17:23",
    "Estado": "T520",
    "Razon Estado": "Operacion liquidada por SPEI",
    "ConfirmationNM": "CLE10000552",
    "Tipo Cuenta": "CBE",
    "Cuenta": "'012180001673505629",
    "Agente": "BCM",
    "Acronimo Banco": "BBVA MEXICO",
    "ID Movimiento Venta": "",
    "Importe Origen": "600000",
    "Divisa Origen": "MXP",
    "Tipo Cambio": "1",
    "Codigo Estado Origen": "CDM",
    "Nombre Ord": "CONSULTORES LEGALES ESPECIALIZADOS GUADARRAMA S DE RL DE CV",
    "Segundo Nom Ord": "",
    "Apellido Ord": "",
    "Apellido Mat Ord": "",
    "Direccion Ord": "Sin Calle",
    "Ciudad Ord": "CDMX",
    "Estado Ord": "CDM",
    "Pais Ord": "MEX",
    "Codigo Zip Ord": "00000",
    "Telefono Ord": "'5544332211",
    "Nombre Ben": "SEPSA SERVICIOS INTEGRALES SA DE CV",
    "Segundo Nom Ben": "",
    "Apellido Ben": "",
    "Apellido Mat Ben": "",
    "Direccion Ben": "PROLONGACION MADERO NO. 4305 COL. FIERRO",
    "Ciudad Ben": "MONTERREY",
    "Estado Ben": "NLE",
    "Pais Ben": "MEX",
    "Codigo Zip Ben": "64590",
    "Telefono Ben": "'5544332211",
    "Titular": "SEPSA SERVICIOS INTEGRALES SA DE CV",
    "Idperson": "3435014",
    "Tipo Cambio Banxico": "19.5887",
    "Agencia": "CONSULTORES LEGALES ESPECIALIZADOS GUADA",
    "Sub Estado T329": "-",
    "ClaveRastreoSpei": "'90703CLE1000055220240917006",
    "Concepto_de_pago": "COMPRA GUADARRAMA CDMX\r"
}

interface Transaccion {
    IdTransaccion: string;
    FechaRecepcion: string;
    ImporteDestino: string;
    DivisaDestino: string;
    FechaEstado: string;
    Estado: string;
    RazonEstado: string;
    ConfirmationNM: string;
    TipoCuenta: string;
    Cuenta: string;
    Agente: string;
    AcronimoBanco: string;
    IDMovimientoVenta: string;
    ImporteOrigen: string;
    DivisaOrigen: string;
    TipoCambio: string;
    CodigoEstadoOrigen: string;
    NombreOrd: string;
    SegundoNomOrd: string;
    ApellidoOrd: string;
    ApellidoMatOrd: string;
    DireccionOrd: string;
    CiudadOrd: string;
    EstadoOrd: string;
    PaisOrd: string;
    CodigoZipOrd: string;
    TelefonoOrd: string;
    NombreBen: string;
    SegundoNomBen: string;
    ApellidoBen: string;
    ApellidoMatBen: string;
    DireccionBen: string;
    CiudadBen: string;
    EstadoBen: string;
    PaisBen: string;
    CodigoZipBen: string;
    TelefonoBen: string;
    Titular: string;
    Idperson: string;
    TipoCambioBanxico: string;
    Agencia: string;
    SubEstadoT329: string;
    ClaveRastreoSpei: string;
    ConceptoDePago: string;
  }
  