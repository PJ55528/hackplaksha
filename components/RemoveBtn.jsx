'use client';

import { HiOutlineTrash } from "react-icons/hi";
import {useRouter} from "next/navigation";

export default function RemoveBtn({id}){

    const router = useRouter();
    const removeScheme = async () => {
        const confirmed = confirm("Are you sure you want to delete this scheme?");

        if(confirmed){
            const res = await fetch(`http://localhost:3000/api/schemes?id=${id}`, {
                method: "DELETE",
            });

            if(res.ok){
                router.refresh();
            }
        }
    };
    return (
        <button onClick={removeScheme} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    )
}