import Link from "next/link"
import { Button } from "@/components/ui/button"

function MoneyIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )
}

export default function Navbar() {
    return (
        <nav className="inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                    <Link className="flex items-center" href="#">
                        <MoneyIcon className="h-6 w-6" />
                        <span className="sr-only">Daffa Inc</span>
                    </Link>
                    <nav className="hidden md:flex gap-8">
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/">
                            Home
                        </Link>
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/about">
                            About
                        </Link>
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/contact">
                            Contact
                        </Link>
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/blog">
                            Blog
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button size="sm" variant="outline">
                            Sign in
                        </Button>
                        <Button size="sm">Sign up</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}