import BlogList from '../../components/BlogList'


export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#002b49] text-white">
      {/* <Header /> */}

      <main className="py-16 px-6 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <h1 className="text-5xl font-serif mb-8 pl-5">Our Insights</h1> 
            <BlogList />
          </div>

        </div>
      </main>

  
    </div>
  )
}
