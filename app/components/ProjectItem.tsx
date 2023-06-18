import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
  href: string
  src: string
  title: string
}

export default function ProjectItem ({
  href,
  src,
  title
}: ProjectItemProps) {
  return (
    <Link href={href} className='flex flex-col items-center text-center'>
      <Image
        alt={`miniatura de ${title}`}
        className='w-auto h-auto object-cover rounded-xl border-2 border-solid border-zinc-500 aspect-video'
        height={270}
        src={src}
        width={480}
      />
      <h3 className='text-xl font-semibold my-1'>{title}</h3>
    </Link>
  )
}
