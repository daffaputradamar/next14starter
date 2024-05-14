/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Np8alO6NZuf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import PostCard from "@/components/postcard/PostCard"

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" })

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

export default async function BlogPage() {

  const posts = await getData()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} desc={post.body} tag="Creative" date="September 2022" image="/placeholder.svg" link="/blog/1" />
      ))}
    </div>
  )
}