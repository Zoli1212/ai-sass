'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from 'next-auth'
import { Button } from "./ui/button";
import { signIn, signOut} from 'next-auth/react'

function UserButton({ session }: { session: Session | null}) {

    if(!session) return (
        <Button variant={'outline'} onClick={() => signIn() }>
            SignIn
        </Button>

    )
  return  session && (
    <DropdownMenu>
      <DropdownMenuTrigger><UserAvatar name={session.user?.name} image={session.user?.image}/></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        {/* <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem> */}
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
