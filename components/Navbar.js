import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="site logo" width={205} height={50} />
          </a>
        </Link>
      </div>
      <div className="menu-links">
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/#about">
          <a>about</a>
        </Link>
        <Link href="/#projects">
          <a>projects</a>
        </Link>
        <Link href="/contact">
          <a>contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
