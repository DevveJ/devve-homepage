import Article from '@/app/components/article'
import Image from 'next/image'

export default function PeliculasPage () {
  return (
    <Article title='Buscador de peliculas'>
      <Image
        alt='Buscador De Peliculas'
        src='/proyectos/peliculas.webp'
        height={540}
        width={960}
        className='w-auto h-auto object-cover rounded-xl border-2 border-solid border-zinc-500 aspect-video'
      />
      <div className='space-y-3'>
        <h1 className='text-4xl font-bold'>Buscador de peliculas</h1>
        <p className='inline-flex items-center gap-1'>
          <span className='bg-[#9ae6b429] text-emerald-400 uppercase p-1 text-xs font-bold rounded-sm'>stack</span>
          React, useEffect, useState, useRef, useCallback, Fetch.
        </p>
        <p className='iniline-flex items-center gap-1'>
          <span className='bg-[#9ae6b429] text-emerald-400 uppercase p-1 text-xs font-bold rounded-sm'>website</span>{' '}
          <a href='https://movie-search-devve.vercel.app/' target='_blank' className='text-[#ff63c3] hover:underline inline'>
            https://movie-search-devve.vercel.app/
          </a>
        </p>
        <p className='iniline-flex items-center gap-1'>
          <span className='bg-[#9ae6b429] text-emerald-400 uppercase p-1 text-xs font-bold rounded-sm'>repositorio</span>{' '}
          <a href='https://github.com/DevveJ/movie-search' target='_blank' className='text-[#ff63c3] hover:underline inline'>
            https://github.com/DevveJ/movie-search
          </a>
        </p>
      </div>
    </Article>
  )
}
