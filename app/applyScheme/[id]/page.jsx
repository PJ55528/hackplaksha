import RegisterForm from "@/components/ApplicationForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import ApplicationForm from "@/components/ApplicationForm";

export default async function Register() {
  // const session = await getServerSession(authOptions);

  // if (session) redirect("/Borrower");

  return <ApplicationForm />;
}
