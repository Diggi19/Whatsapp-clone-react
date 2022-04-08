import React from 'react'

const Appcontext = React.createContext()

export const AppProvider = ({children})=>{
    const[user,setuser] = React.useState(null)
    return(
        <Appcontext.Provider value={{
            user,
            setuser
        }}>
            {children}
        </Appcontext.Provider>
    )
}

const useGlobal = ()=>{
    return React.useContext(Appcontext)
}

export default useGlobal