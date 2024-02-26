import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import LoginForm from "./LoginForm";

const getSchemes = async () => {
    try{
        const res = await fetch("http://localhost:3000/api/schemes",{
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("failed to fetch schemes");
        }

        return res.json();
    } catch (error){
        console.log("Error loading schemes: ", error);
    }
};

export default async function SchemesList() {
    const {schemes} = await getSchemes();

    return (
        <>
        {schemes.map((t) =>(
            <div className="p-4 border border-slate-300 my-3 rounded-lg flex justify-between gap-5 items-center" style={{background: 'linear-gradient(to right, rgba(255,126,95,0.7), rgba(254,180,123,0.7))', height: '150px', opacity: 0.9}}>

            <div>
                <h2 className="font-bold text-2xl">{t.title}</h2>
                <div>
                    {t.description}
                </div>
            </div>
            <div className="flex gap-2">
                <RemoveBtn id={t._id}/>
                <Link href={`/editScheme/${t._id}`}>
                    <HiPencilAlt size={24} />
                </Link>
            </div>
        </div>
        ))}
        </>
    )
}