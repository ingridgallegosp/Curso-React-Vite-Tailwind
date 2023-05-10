import { createContext, useState } from 'react'

//estado global de la aplicacion-fuente de verdad a donde vamos a hacer request desde dif componentes de la app
//1 crear un contexto
export const ShopiCartContext = createContext();

//el context se provee mediante un provideer
export const ShopiCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    //console.log('count:', count)
    const [isProductDetailOpen, setisProductDetailOpen] = useState(true);
    const toggleProductDetail = () => setisProductDetailOpen(!isProductDetailOpen)

    
    return (
    //llamamos al proveedor del contexto y hacemos un wrapper - con el q provee la info del contexto
    //2 crear un proveedor que va a encapsular todos los componentes que tenemos en App para proveerlos de informacion
        //va a tener un hijo(App) que necesita que lea count y tb que cualquier componente puede modificar ese valor
        <ShopiCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setisProductDetailOpen, 
            toggleProductDetail
        }}>
            {children}
        </ShopiCartContext.Provider>
    )
}



