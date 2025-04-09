import { createContext } from "react";

export interface IdContextType {
    params: { id: string };
    setBackground: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const IdInfoContext = createContext<IdContextType | null>(null);