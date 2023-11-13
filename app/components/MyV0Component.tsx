/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0T4vi5yHrgU
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <Card className="bg-[#00008b] text-white mx-auto max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Guestbook</CardTitle>
        <CardDescription>Please sign in to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input className="bg-white text-black" id="email" placeholder="johndoe@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input className="bg-white text-black" id="password" required type="password" />
          </div>
          <Button className="w-full bg-[#1e90ff] text-white" type="submit">
            Sign In
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <Link className="underline text-[#1e90ff]" href="#">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}


