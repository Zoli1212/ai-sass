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
import { signIn} from 'next-auth/react'

function UserButton({ session }: { session: Session | null}) {

    if(!session) return (
        <Button variant={'outline'} onClick={() => signIn() }>
            SignIn
        </Button>

    )
  return (
    <DropdownMenu>
      <DropdownMenuTrigger><UserAvatar name={'John Doe'} image={'https://github.com/shadcn.png'}/></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Dark</DropdownMenuItem>
        <DropdownMenuItem>System</DropdownMenuItem>
        <DropdownMenuItem>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
