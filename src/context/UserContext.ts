import { createContext } from "react";
import { Dispatch, SetStateAction } from 'react';

export interface UserContextType {
  empresa: string;
  correo: string;
  setEmpresa: Dispatch<SetStateAction<string>>; // Ahora acepta un string como argumento
  setCorreo: Dispatch<SetStateAction<string>>; 
}

// Crear el contexto
export const UserContext = createContext<UserContextType | undefined>();



