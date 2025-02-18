import { Button } from "@/components/ui/button";
import { Layers, Pencil, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <section className="flex justify-center h-[70vh]">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl tracking-tighter sm:text-3xl md:text-4xl font-bold lg:text-5xl text-white">
            Manage your content with ease
          </h1>
          <p className="text-gray-400 max-w-[1000px] mx-auto">
            StreamLine your content workflow, with a single platform.
          </p>
          <div>
            <Link href="/blogs">
              <Button variant={"default"} size={"lg"}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="max-h-screen sm:min-h-[30vh] bg-gray-600/10">
        <div className="grid gap-2 grid-cols-3 p-10">
          <span className="flex flex-col items-center justify-center">
            <Pencil size={50} />
            <h4 className="text-xl font-bold text-gray-100">
              Intuitive Editor
            </h4>
            <p className="text-gray-400">Create and edit content with ease</p>
          </span>
          <span className="flex flex-col items-center justify-center">
            <Layers size={50} />
            <h4 className="text-xl font-bold text-gray-100">Flexible Tools</h4>
            <p className="text-gray-400">Create and edit content with ease</p>
          </span>

          <span className="flex flex-col items-center justify-center">
            <Zap size={50} />
            <h4 className="text-xl font-bold text-gray-100">Blazing fast</h4>
            <p className="text-gray-400">Create and edit content with ease</p>
          </span>
        </div>
      </section>
      <section className="max-h-screen sm:min-h-[50vh] pt-20">
        <div className="flex flex-col gap-4 justify-center items-center p-10">
          <h4>Ready to Transform Your Content</h4>
          <p>
            Join thousands of creators and content creators who are already
            using our platform.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              className="bg-zinc-800 focus:outline-none max-w-[400px] rounded-sm"
              placeholder="  Enter your email"
            />
            <Button>Submit</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
