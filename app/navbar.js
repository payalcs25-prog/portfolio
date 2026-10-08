import State from './State'
import Form from './Form'
import Navbar from './Navbar'

// Routing in next.js : Link -> page.js (with each folder)
export default function Home(){
    return(
        <>
            <Navbar />
            Welcome to home page
        </>
    )
}

import Link from "next/link"

export default function Navbar() {
    return (
        <div>
            {/* <p className="text-red-400 font-medium text-center ">tailw */}
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    )
}

import State from './State'
import Form from './Form'
import Navbar from './Navbar'

export default function Home(){
    return(
        <>
            <Navbar />
            Welcome to home page
        </>
    )
}

export default function AboutPage() {
  return (
    <div>
      <p>Welcome to the about page</p>
    </div>
  )
}