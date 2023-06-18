import type { Metadata } from 'next'
import ProjectItem from '../components/ProjectItem'

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Muestra de mi conocimiento.'
}

export default function ProyectosPage () {
  return (
    <section>
      <h1 className='font-bold text-4xl'>Proyectos</h1>
      <p className='my-5'>Una muestra de mi conocimiento en proyectos.</p>
      <div className='grid grid-cols-2 gap-6 md:gap-12 mt-10'>
        <ProjectItem
          href='/proyectos/postit'
          title='Post It'
          src='/proyectos/postit.png'
        />
        <ProjectItem
          href='/proyectos/margelo'
          title='Margelo'
          src='/proyectos/margelo.png'
        />
        <ProjectItem
          href='/proyectos/giffy'
          title='Giffy'
          src='/proyectos/giffy.png'
        />
        <ProjectItem
          href='/proyectos/peliculas'
          title='Buscador de Peliculas'
          src='/proyectos/peliculas.png'
        />
        <ProjectItem
          href='/proyectos/tic-tac-toe'
          title='Tic Tac Toe (La Vieja)'
          src='/proyectos/tictactoe.png'
        />
        <ProjectItem
          href='/proyectos/tesla'
          title='Landing Tesla'
          src='/proyectos/tesla.jpg'
        />
      </div>
    </section>
  )
}
