import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Mapa from './pages/Mapa.jsx'
import Timeline from './pages/Timeline.jsx'
import Regioes from './pages/Regioes.jsx'
import Campeoes from './pages/Campeoes.jsx'
import WorkInProgress from './components/WorkInProgress.jsx'

const router = createBrowserRouter([
  {path:"/Varrain", element: <App/>},
  {path:"/universo", element: <WorkInProgress/>},
  {path:"/campeoes", element: <Campeoes/>},
  {path:"/regioes", element: <Regioes/>},
  {path:"/galeria", element: <WorkInProgress/>},
  {path:"/timeline", element: <Timeline/>},
  {path:"/mapa", element: <Mapa/>},
  {path:"/sobre", element: <WorkInProgress/>},
  {path:"/ajude", element: <WorkInProgress/>},
  {path:"/conte", element: <WorkInProgress/>},
  {path:"/suporte", element: <WorkInProgress/>},
  {path:"/*", element: <WorkInProgress/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
