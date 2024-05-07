/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pHxagDXPi6g
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

function MoneyIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 md:p-12 w-full dark:bg-gray-950/90">
      <div className="container max-w-7xl flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <Link className="flex items-center gap-2" href="#">
          <MoneyIcon className="h-6 w-6" />
          <span className="text-sm font-medium">Daffa Inc.</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          {/* <Link className="hover:underline" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:underline" href="#">
            Terms of Service
          </Link> */}
        </div>
      </div>
    </footer>
  )
}
