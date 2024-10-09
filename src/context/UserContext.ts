import { createContext } from "react";
import { Dispatch, SetStateAction } from 'react';

export interface UserContextType {
  empresa: string;
  correo: string;
  datos: string;
  setEmpresa: Dispatch<SetStateAction<string>>;
  setCorreo: Dispatch<SetStateAction<string>>; 
  setDatos: Dispatch<SetStateAction<string>>; 
}

// Crear el contexto
export const UserContext = createContext<UserContextType | undefined>();



