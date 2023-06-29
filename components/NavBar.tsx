// Components
import Image from "next/image"
import Link from "next/link"

// Constants
import { NavLinks } from "@/constants"
import AuthProviders from "./AuthProviders"

const NavBar = () => {
  const session = null

  return (
    <nav className="flex-between navbar">
        <div className="flex-1 flex-start gap-10">
            <Link href="/">
                <Image
                    src="/logo.svg"
                    width={115}
                    height={43}
                    alt="Drizzzle"
                />
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
              { NavLinks.map(link => (
                <Link key={link.key} href={link.href}>
                  { link.text }
                </Link>
              )) }
            </ul>
        </div>

        <div className="flex-center gap-4">
          { session ? (
            <>
              UserPhoto
              <Link href="/create-project">
                Share Work
              </Link>
            </>
          ) : (
            <AuthProviders />
          ) }
        </div>
    </nav>
  )
}

export default NavBar