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
          src='/proyectos/postit.webp'
        />
        <ProjectItem
          href='/proyectos/margelo'
          title='Margelo'
          src='/proyectos/margelo.webp'
        />
        <ProjectItem
          href='/proyectos/giffy'
          title='Giffy'
          src='/proyectos/giffy.webp'
        />
        <ProjectItem
          href='/proyectos/peliculas'
          title='Buscador de Peliculas'
          src='/proyectos/peliculas.webp'
        />
        <ProjectItem
          href='/proyectos/tic-tac-toe'
          title='Tic Tac Toe (La Vieja)'
          src='/proyectos/tictactoe.webp'
        />
        <ProjectItem
          href='/proyectos/tesla'
          title='Landing Tesla'
          src='/proyectos/tesla.webp'
        />
      </div>
    </section>
  )
}
