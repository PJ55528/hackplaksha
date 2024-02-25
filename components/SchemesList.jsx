import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function SchemesList() {
    return (
        <>
        <div className="p-4 border border-slate-300 my-3 rounded-lg flex justify-between gap-5 items-center" style={{background: 'linear-gradient(to right, rgba(255,126,95,0.7), rgba(254,180,123,0.7))', height: '150px', opacity: 0.9}}>
            <div>
                <h2 className="font-san francisco text-2xl">Schemes Title</h2>
                <div>
                    Loan Amount
                    Loan Interest
                    Time Period
                </div>
            </div>
            <div className="flex gap-2">
                <RemoveBtn />
                <Link href={'/editScheme/123'}>
                    <HiPencilAlt size={24} />
                </Link>
            </div>
        </div>
        </>
    )
}
