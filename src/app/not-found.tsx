import Link from "next/link";

export default function NotFound() {
    return (
        <div className="m-auto">
            <span>Not found 😔</span>
            <Link href="/" className="link link-primary">Go Back</Link>
        </div>
    )
}