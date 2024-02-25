import UserInfo from "@/components/UserInfo";

export default function Dashboard() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/r.png")' }}>
      <UserInfo />
    </div>
  );
}
