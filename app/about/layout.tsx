// import "@/global.css" 
import Link from "next/link";

export default function AboutLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>
        {/* <nav>
          <Link className="pb-3" href="/">Home</Link>
          <Link className="pb-3" href="/about/founders">About</Link>
          <Link className="pb-3" href="/contact">Contact</Link>
        </nav> */}
      </header>
      <main>{children}</main>
    </div>
  );
}