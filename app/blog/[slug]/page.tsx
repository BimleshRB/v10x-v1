import BlogDetail from '@/components/BlogDetails'

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return <div className="min-h-screen bg-[#002b49] text-white">
  <BlogDetail slug={slug} />
</div>
}
