import { createContext , useCallback, useState , useMemo , useContext } from 'react';

const MY_APP = 'MY_App';

export const AuthContext = createContext()


export function AuthContextProvider({children}){
    const [isAuthenticated , setisAuthenticated] = useState(localStorage.getItem(MY_APP) ?? false)

    const Login = useCallback(function(){
        localStorage.setItem(MY_APP, true)
        setisAuthenticated(true)
    }, [])

    const Logout = useCallback(function(){
        localStorage.removeItem(MY_APP)
        setisAuthenticated(false)
    }, [])

    const value = useMemo(() => ({
        Login , 
        Logout ,
        isAuthenticated
    }), [ Login, Logout , isAuthenticated])

    return <AuthContext.Provider value={value} > {children} </AuthContext.Provider>
}

export function useAuthContent(){
    return useContext(AuthContext)
}