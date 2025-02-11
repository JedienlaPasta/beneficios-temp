import { redirect } from "react-router-dom"

const ROLES = {
    ADMIN: 'ADMIN',
    USUARIO: 'USUARIO',
    SUPERVISOR: 'SUPERVISOR',
}

export const loginAuthenticationLoader = async () => {
    const { user } = await checkAuthentication()
    if (user?.role) return redirect('/')
        return null
}

export const homeAuthenticationLoader = async () => {
    const { user } = await checkAuthentication()
    if (!user?.role) return redirect('/login')
    return user
}

const checkAuthentication = () => {
    return { user: { name: 'Kristina Meyers', role: ROLES.SUPERVISOR } }
}