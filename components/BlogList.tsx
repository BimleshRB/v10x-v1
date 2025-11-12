import Link from 'next/link';
import { BLOGS } from '@/data/blog'; // Adjust path as needed
import { BlogItem } from '@/types/blog'; // Adjust path as needed
import Image from 'next/image'; // Import Next.js Image component for optimization

export default function BlogList() {
  // Separate the first blog to feature it
  const featuredBlog: BlogItem | undefined = BLOGS[0];
  const otherBlogs: BlogItem[] = BLOGS.slice(1);

  return (
    <section className="bg-[#002b49] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* Main grid setup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Featured Blog Post (Spans 2 columns) */}
          {featuredBlog && (
            <article key={featuredBlog.slug} className="lg:col-span-2 bg-[#013047] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
              <Link href={`/blog/${featuredBlog.slug}`} className="block md:flex group">
                {/* Featured Image - Using next/image */}
                <div className="relative md:w-1/2 h-64 md:h-auto min-h-[300px]">
                    <Image
                      src={featuredBlog.featuredImage}
                      alt={featuredBlog.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority
                    />
                </div>
                
                {/* Featured Content */}
                <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
                  <div className="text-xs uppercase tracking-wider mb-2 text-blue-300 font-semibold">{featuredBlog.category}</div>
                  <h3 className="text-3xl lg:text-4xl font-serif mb-4 text-white group-hover:underline">{featuredBlog.title}</h3>
                  <p className="text-gray-300 mb-6 text-base lg:text-lg">{featuredBlog.excerpt}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                      {featuredBlog.authorImage && ( // Check if authorImage exists
                        <Image
                          src={featuredBlog.authorImage}
                          alt={featuredBlog.author}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-200">{featuredBlog.author}</div>
                      <div className="text-xs text-gray-400">
                        {featuredBlog.date}
                        {/* Check if readingTime exists before displaying */}
                        {featuredBlog.readingTime && (
                          <span> · {featuredBlog.readingTime} min read</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )}

          {/* Other Blog Posts (as cards) */}
          {otherBlogs.map((b: BlogItem) => (
            <article key={b.slug} className="bg-[#013047] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl flex flex-col">
              <Link href={`/blog/${b.slug}`} className="block group h-full flex flex-col">
                {/* Card Image - Using next/image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={b.featuredImage}
                    alt={b.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs uppercase tracking-wider mb-2 text-blue-300 font-semibold">{b.category}</div>
                  <h3 className="text-2xl font-serif mb-2 text-white group-hover:underline">{b.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm flex-grow">{b.excerpt}</p>
                  {/* Author (at the bottom) */}
                  <div className="flex items-center gap-3 text-sm text-gray-400 mt-auto">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                      {b.authorImage && ( // Check if authorImage exists
                        <Image
                          src={b.authorImage}
                          alt={b.author}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-200">{b.author}</div>
                      <div className="text-xs text-gray-400">
                        {b.date}
                        {/* Check if readingTime exists before displaying */}
                        {b.readingTime && (
                          <span> · {b.readingTime} min read</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}