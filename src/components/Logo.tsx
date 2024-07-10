import Link from "next/link";

interface Props{
  title?:string;
  className?:string;
}

const Logo = ({title, className}:Props) => {
  return (
    <Link href={"/"}>
    <h1 className={`text-3xl font font-extrabold uppercase ${className}`}>
    {title || 'Posblog'}</h1>
    </Link>
  )
}

export default Logo