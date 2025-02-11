import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Home from './pages/Home.jsx'
import { AuthProvider } from '../context/AuthContext.jsx'
import Login from './pages/Login.jsx'
import { homeAuthenticationLoader, loginAuthenticationLoader } from './loaders/authenticationLoader.jsx'
import { homeChildrenRoutes } from './routes/routes.jsx'

const root = document.getElementById('root')

// const homeChildrenRoutes = []
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: homeChildrenRoutes,
    // errorElement: < />,
    loader: homeAuthenticationLoader,
  },
  {
    path: '/login',
    element: <Login />,
    // errorElement: < />,
    loader: loginAuthenticationLoader,
  },
])

ReactDOM.createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
