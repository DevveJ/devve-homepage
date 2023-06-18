import type { Metadata } from 'next'
import {
  GitHubIcon,
  ArrowIcon,
  TwitterIcon
} from '../components/icons'

export const metadata: Metadata = {
  title: 'Acerca de',
  description: 'Desarrollador Apacionado'
}

export default function AcercaPage () {
  return (
    <section>
      <h1 className='font-bold text-4xl'>Acerca de mi</h1>
      <p className='my-5 text-neutral-800 dark:text-neutral-200'>
        Hey, soy Gerardo. Más conocido como <strong>Devve</strong> en la web.
      </p>
      <div className='text-neutral-800 dark:text-neutral-200 space-y-10 leading-relaxed'>
        <p>
          Soy un apasionado desarrollador web fullstack con amplia experiencia
          en la creación de soluciones digitales de principio a fin. Mi enfoque
          se basa en combinar habilidades tanto en el desarrollo del front-end
          como en el back-end para ofrecer experiencias de usuario fluida y
          funcional.
        </p>
        <hr className='opacity-60' />
        <p>
          Mi experiencia abarca la creación de sitios web responsivos y
          dinámicos, la implementación de sistemas de gestión de contenidos{' '}
          <strong>CMS</strong> personalizados y la integración de APIs de
          terceros para ampliar la funcionalidad de las aplicaciones. Además,
          poseo un sólido conocimiento en librerias y framewroks populares asi
          como Express, Remix, Astro, Tailwind y herramientas auxiliares como
          NextAuth y Prisma
        </p>
        <p>
          Soy un comunicador eficiente y un colaborador entusiasta, capaz de
          trabajar tanto en equipos multidisciplinarios como de manera autónoma.
          Me enfoco en entender las necesidades del cliente y traducirlas en
          soluciones técnicas efectivas. Mi objetivo principal es crear
          productos web eficientes, escalables y de calidad que brinden una
          experiencia excepcional a los usuarios.
        </p>
        <p className='mb-8'>
          Estoy constantemente actualizándome en las últimas tendencias y
          tecnologías del desarrollo web, lo que me permite ofrecer soluciones
          innovadoras y estar al tanto de las mejores prácticas de la industria.
        </p>
        <div className='flex flex-col gap-2 md:flex-row md:gap-2'>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://twitter.com/DevveJL'
            className='flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between'
          >
            <div className='flex items-center'>
              <TwitterIcon />
              <div className='ml-3'>Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/DevveJ'
            className='flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between'
          >
            <div className='flex items-center'>
              <GitHubIcon />
              <div className='ml-3'>GitHub</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
