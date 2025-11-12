import Link from 'next/link'
import { BLOGS_MAP } from '@/data/blog'
import { BlogItem } from '@/types/blog'

type Props = {
  slug?: string
}

export default function BlogDetail({ slug }: Props) {
  const post: BlogItem | undefined = slug ? BLOGS_MAP[slug] : undefined

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-8 bg-[#002b49]">
        <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
        <p className="mb-4 text-gray-600">We couldn't find the article you're looking for.</p>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto p-8 bg-[#002b49]">
      <header className="mb-8">
        <h1 className="text-4xl font-serif mb-2">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-white">
          <span>{post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          {post.readingTime ? (
            <>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </>
          ) : null}
        </div>
      </header>

      {post.featuredImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.featuredImage} alt={post.title} className="w-full h-64 object-cover mb-6 rounded" />
      ) : null}

      <div className="prose max-w-none whitespace-pre-wrap text-white">{post.content}</div>

      <footer className="mt-12">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </footer>
    </article>
  )
}
