import Link, { LinkProps } from "next/link" 

interface Link extends LinkProps {
    texto: string;
    href: string;
}

export default function TextNav({ texto, href, ...rest }: Link) {
    return (
        <Link href={href} {...rest} className="text-white">
            {texto && <span>{texto}</span>}
        </Link>
    )
}