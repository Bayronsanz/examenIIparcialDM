import { createContext } from "react";
import { Producto } from "../Models/Producto";

export interface ProductoContextType{
    productos: Producto[];
    cargarProductos: () => Promise<void>
    agregarProducto: (producto: Producto) =>Promise<void>
    eliminarProducto: (id: number) => Promise<void>
}

export const ProductoContext= createContext<ProductoContextType |undefined>(undefined)