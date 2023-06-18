import Image from 'next/image'
import { name, bio, avatar } from './lib/info'

export const revalidate = 60

export default function HomePage () {
  return (
    <section>
      <div className='md:flex max-w-xl'>
        <div className='flex-grow'>
          <h1 className='font-bold text-4xl'>{name}</h1>
          <p className='my-4 text-neutral-800 dark:text-neutral-200 text-xl'>
            Desarrollador FullStack
          </p>
        </div>

        <div className='flex-shrink-0 mt-4 md:mt-0 md:ml-6 text-center'>
          <div className='border-gray-500 border-2 border-solid w-[100px] h-[100px] inline-block rounded-full overflow-hidden'>
            <Image
              alt={name}
              className='object-contian grayscale'
              src={avatar}
              placeholder='blur'
              width={100}
              height={100}
              priority
            />
          </div>
        </div>
      </div>
      <p className='my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200 leading-relaxed'>
        {bio()}
      </p>
    </section>
  )
}
