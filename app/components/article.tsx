import Head from 'next/head'

interface ArticleProps {
  children: React.ReactNode
  title: string
}

export default function Article ({ children, title }: ArticleProps) {
  return (
    <article className='space-y-8'>
      <Head>
        <title>{title}</title>
        <meta name='twitter:title' content={title} />
        <meta property='og:title' content={title} />
      </Head>
      {children}
    </article>
  )
}
