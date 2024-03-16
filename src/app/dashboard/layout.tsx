import NavBar from "@/app/ui/dashboard/navbar";
import Sidenav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col ">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-row p-6 md:overflow-y-auto md:p-12 gap-8">
        <Sidenav />
        {children}
      </div>
    </div>
  );
}
