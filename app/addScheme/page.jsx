"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import UserInfo from "@/components/UserInfo";
import LoginForm from "@/components/LoginForm";

export default function AddScheme() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description){
            alert("Please fill in all fields");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/schemes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title, description}),
            });

            if(res.ok){
                router.push("/");
            } else {
                throw new Error("Failed to add scheme");
            }
        } catch(error){
            console.log(error);
        }
    };

    console.log("hi");
    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Scheme Title"
        />

        <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Scheme Description"
        />   

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Add Scheme
        </button>
    </form>
    );
}
