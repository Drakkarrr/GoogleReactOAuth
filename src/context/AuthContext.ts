import { CredentialResponse } from "@react-oauth/google";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const navigate = useNavigate();
const [user, setUser] = useState<CredentialResponse | null>(null);

useEffect(() => {
    const user =
        localStorage.getItem('user') !== 'undefined'
            ? JSON.stringify(localStorage.getItem('user'))
            : localStorage.clear()
    if (!user) navigate('/login')
}, [navigate])

export const onSuccess = (response: CredentialResponse) => {
    console.log(`Successfully login: ${response}`)
    navigate('/dashboard')
    setUser(response)
    console.log(user)
}

export const onError = () => {
    console.log('Login failed')
}