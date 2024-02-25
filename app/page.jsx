import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

import SchemeApplication from "@/components/SchemeApplication"; 
import SchemesList from "@/components/SchemesList";

export default async function Home() {
  const session = await getServerSession(authOptions);


  if (session) {
    return (
      <> 
      <SchemesList/>
      <SchemeApplication/>
      
      </>
      );
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
}