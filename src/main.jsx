import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Abuot from './pages/Abuot.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Instructions from './pages/Instructions.jsx'
import Courses from './pages/Courses.jsx'


const router = createBrowserRouter([
  {path: "/", element:<App />},
  {path: "/", element:<Home />},
  {path: "/about", element:<Abuot />},
  {path: "/course", element:<Courses />},
  {path: "/instruction", element:<Instructions />},
  {path: "/blog", element:<Blog />},
  {path: "/contact", element:<Contact />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
