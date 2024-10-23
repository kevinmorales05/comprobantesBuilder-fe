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


export interface Transaccion {
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
  