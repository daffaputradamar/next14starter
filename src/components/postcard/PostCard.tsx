import Link from "next/link";
import { Button } from "../ui/button";

function PostCard({ title, desc, tag, date, image, link }: { title: string, desc: string, tag: string, date: string, image: string, link: string }) {
    return <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 py-4">
        <div className="relative h-64 w-full">
            <img
                alt="Blog Post Image"
                className="object-cover"
                height="256"
                src={image}
                style={{
                    aspectRatio: "384/256",
                    objectFit: "cover",
                }}
                width="384"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
                <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-medium">{tag}</span>
            </div>
            <div className="absolute bottom-4 right-4 text-white">
                <span className="rounded-full bg-slate-700/90 text-white px-3 py-1 text-xs font-medium">{date}</span>
            </div>
        </div>
        <div className="p-6 flex flex-col justify-between h-[calc(100%-256px)]">
            <div>
                <h2 className="mb-2 text-2xl font-bold">{title}</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {desc}
                </p>
            </div>
            <Link
                href={link}
            >
                <Button variant="default">Read More</Button>
            </Link>
        </div>
    </div>
}

export default PostCard;