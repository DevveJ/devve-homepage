import Article from '@/app/components/article'
import Image from 'next/image'

export default function MargeloPage () {
  return (
    <Article title='Margelo'>
      <Image
        alt='Margelo'
        src='/proyectos/margelo.png'
        height={540}
        width={960}
        className='w-auto h-auto object-cover rounded-xl border-2 border-solid border-zinc-500 aspect-video'
      />
      <div className='space-y-3'>
        <h1 className='text-4xl font-bold'>Margelo</h1>
        <p className='inline-flex items-center gap-1'>
          <span className='bg-[#9ae6b429] text-emerald-400 uppercase p-1 text-xs font-bold rounded-sm'>stack</span>
          Next.js, Tailwind, Axios, Formik
        </p>
        <p className='iniline-flex items-center gap-1'>
          <span className='bg-[#9ae6b429] text-emerald-400 uppercase p-1 text-xs font-bold rounded-sm'>website</span>{' '}
          <a href='https://margelo-devve.vercel.app/' target='_blank' className='text-[#ff63c3] hover:underline inline'>
            https://margelo-devve.vercel.app/
          </a>
        </p>
        <p className='iniline-flex items-center gap-1'>
          <span className='bg-[#9ae6b429] text-emerald-400 uppercase p-1 text-xs font-bold rounded-sm'>repositorio</span>{' '}
          <a href='https://github.com/DevveJ/margelo-clone' target='_blank' className='text-[#ff63c3] hover:underline inline'>
            https://github.com/DevveJ/margelo-clone
          </a>
        </p>
      </div>
    </Article>
  )
}
