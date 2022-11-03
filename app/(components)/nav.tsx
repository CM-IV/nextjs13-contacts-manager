import Link from "next/link"

export default function Nav() {
  return (
    <>
      <nav
        className="navbar"
        id="nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="image is-48x48 mt-1" href="/">
            <img
              src="https://ik.imagekit.io/xbkhabiqcy9/img/saasczar_g0Yhd-5hH.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667482868923"
              height="48"
              width="48"
              className="image-responsive"
              alt="logo"
            />
          </a>
        </div>

        <input
          type="checkbox"
          id="navbar-burger-toggle"
          className="navbar-burger-toggle is-hidden"
        />
        <label htmlFor="navbar-burger-toggle" className="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link href={"/"} className="navbar-item mt-2">
              Home
            </Link>
            <Link href={"/contacts"} className="navbar-item mt-2">
              Contacts
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
    
}