import Link from "next/link";   

export default function Navbar() {
    return (
        <nav className="flex justify-between items-centre
        bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>
                Schemes
            </Link>
            <Link className="bg-white p-2" href={"/addScheme"}>
                Add Scheme
            </Link>
            <Link className="bg-white p-2" href={"/Borrower"}>
                Borrower Page
            </Link>
        </nav>
    );
}