import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

import SchemeApplication from "@/components/SchemeApplication"; 


<<<<<<< HEAD
export default async function Home() {
  const session = await getServerSession(authOptions);
=======
export default function Home() {
    return (
    <> 
    <SchemesList/>
    <SchemeApplication/>
    
    </>
    );
}
>>>>>>> Dipti

  if (session) redirect("/addScheme");

  return (
    <main>
      <LoginForm />
    </main>
  );
}