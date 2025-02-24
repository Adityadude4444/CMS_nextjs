import { Rocket } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const auth = true;
  const temp = { name: "Sam" };
  return (
    <div className="w-full flex justify-between px-8 py-2 h-10">
      <div className="flex gap-2">
        <span className=" text-xl font-bold">CMS</span>
        <Rocket />
      </div>
      {auth ? <Usermodel user={temp} /> : <Link href="/signin">Sign In</Link>}
    </div>
  );
};
export default Navbar;

const Usermodel = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>User</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hi {user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
