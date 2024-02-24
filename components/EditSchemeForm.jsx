"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function EditSchemeForm({id, title, description}) {

    const[newTitle, setNewTitle] = useState(title);
    const[newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try{
            const res = await fetch(`http://localhost:3000/api/schemes/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({newTitle, newDescription}),
            });

            if (!res.ok){
                throw new Error("Failed to update scheme");
            }

            router.refresh();
            router.push("/");
        } catch(error){
            console.log(error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Scheme Title"
        />

        <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Scheme Description"
        />   

        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Update  Scheme
        </button>
    </form>
    );
}