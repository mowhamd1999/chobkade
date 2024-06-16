import React, { useState } from 'react'
export const ContextAuthProvider = React.createContext();
const ContextAuth = ({children}) => {
    const [authentication , setAuthentication] = useState(false)
  return (
    <ContextAuthProvider.Provider value={{authentication , setAuthentication}}>
        {children}
    </ContextAuthProvider.Provider>
  )
}

export default ContextAuth
