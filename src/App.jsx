import { Link, Routes, Route } from 'react-router-dom'
import logoUts from './assets/Logo-UTS-1.png'

import Inicio from './pages/inicio'
import Estudiantes from './pages/estudiantes'
import Docentes from './pages/docentes'
import Nosotros from './pages/nosotros'
import Investigacion from './pages/investicacion'

export default function App() {
  return (
    <>
      <header className='flex flex-row bg-gray-100 justify-around items-center'>
        <img className='w-[200px] flex-64 mt-3 mb-3' src={logoUts} alt='logo' />
        <nav className='flex-128'>
          <Link className='ml-5 mr-[50px] hover:text-green-500' to='/'>Inicio</Link>
          <Link className='ml-[50px] mr-[50px] hover:text-green-500' to='/estudiantes'>Estudiantes</Link>
          <Link className='ml-[50px] mr-[50px] hover:text-green-500' to='/docentes'>Docentes</Link>
          <Link className='ml-[50px] mr-[50px] hover:text-green-500' to='/nosotros'>Nosotros</Link>
          <Link className='ml-[50px] mr-5 hover:text-green-500' to='/investigacion'>Investigación</Link>
        </nav>
        <a
          className='bg-green-500 rounded-full flex-64 w-[100px] h-[40px] text-white hover:bg-green-600 flex items-center justify-center'
          href='https://www.uts.edu.co/sitio/revista-soy-uteista' target='_blank' rel='noreferrer'
        >
          Revista
        </a>
      </header>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/estudiantes' element={<Estudiantes />} />
        <Route path='/docentes' element={<Docentes />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/investigacion' element={<Investigacion />} />
      </Routes>

      <footer className='flex flex-row items-center justify-center bg-green-500 w-full h-10'>
        <p className='flex flex-row text-white'>
          Copyright © Unidades Tecnológicas de Santander
        </p>
      </footer>
    </>
  )
}
