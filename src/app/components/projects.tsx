import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="my-3">
        <Tabs defaultValue="from-scratch" className="w-full">
          <TabsList className="justify-start gap-4 bg-transparent">
            <TabsTrigger
              value="from-scratch"
              className="rounded-full bg-zinc-800/40 px-4 py-2.5 text-sm   hover:bg-zinc-800 hover:text-zinc-100 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100"
            >
              From Scratch
            </TabsTrigger>
            <TabsTrigger
              value="iot-projects"
              className="rounded-full bg-zinc-800/40 px-4 py-2.5 text-sm   hover:bg-zinc-800 hover:text-zinc-100 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100"
            >
              Iot Projects
            </TabsTrigger>

            <TabsTrigger
              value="research"
              className="rounded-full bg-zinc-800/40 px-4 py-2.5 text-sm   hover:bg-zinc-800 hover:text-zinc-100 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100"
            >
              Research Projects
            </TabsTrigger>
            <TabsTrigger
              value="fun"
              className="rounded-full bg-zinc-800/40 px-4 py-2.5 text-sm   hover:bg-zinc-800 hover:text-zinc-100 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100"
            >
              Fun
            </TabsTrigger>
          </TabsList>

          {/* Projects */}
          <div>
            <TabsContent value="from-scratch">
              <div className="flex justify-between items-center group my-2">
                <div>
                  <Link
                    href="https://github.com/iamAbhishekkumar/gitlite"
                    className="text-white hover:underline font-mono"
                  >
                    gitlite
                  </Link>

                  <span className="text-gray-500 ml-2">
                    - a light-weight implementation of git from scratch in go
                  </span>
                  {"  "}
                  <img
                    className="h-6 inline"
                    src="/images/dancing-gopher.gif"
                    alt="Animated GIF"
                  />
                </div>
                {/* <div className="flex items-center gap-2">
                  <span>50 users</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div> */}
              </div>

              <div className="flex justify-between items-center group my-2">
                <div>
                  <Link
                    href="https://github.com/iamAbhishekkumar/NexisDB"
                    className="text-white hover:underline font-mono"
                  >
                    nexisDB
                  </Link>
                  <span className="text-gray-500 ml-2">
                    - a simple database implementation from scratch in c++
                  </span>
                  {"  "}
                  <img
                    className="h-7 inline"
                    src="/images/book.gif"
                    alt="Animated GIF"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="iot-projects">
              <div className="flex justify-between items-center group my-2">
                <div>
                  <Link
                    href="https://github.com/iamAbhishekkumar/Space-Invaders-IOT"
                    className="text-white hover:underline font-mono"
                  >
                    space invaders
                  </Link>
                  <span className="text-gray-500 ml-2 ">
                    - This is a 2D, first-person space shooter game using
                    Raspberry Pi Pico.
                  </span>
                  {"  "}
                  <img
                    className="h-7 inline"
                    src="/images/space.gif"
                    alt="Animated GIF"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center group my-2">
                <div>
                  <Link
                    href="https://github.com/iamAbhishekkumar/Space-Invaders-IOT"
                    className="text-white hover:underline font-mono"
                  >
                    weather station dashboard
                  </Link>
                  <span className="text-gray-500 ml-2">
                    - This is a 2D, first-person space shooter game using
                    Raspberry Pi Pico.
                  </span>
                  {"  "}
                  <img
                    className="h-7 inline"
                    src="/images/sun.gif"
                    alt="Animated GIF"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fun">
              <div className="flex justify-between items-center group my-2">
                <div>
                  <Link
                    href="https://github.com/iamAbhishekkumar/HasiGen"
                    className="text-white hover:underline font-mono"
                  >
                    hashigen
                  </Link>
                  <span className="text-gray-500 ml-2">
                    - An app which suggests trending hastags based on the photo
                    uploaded
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center group my-2">
                <div>
                  <Link
                    href="https://github.com/iamAbhishekkumar/Luna"
                    className="text-white hover:underline font-mono"
                  >
                    luna
                  </Link>
                  <span className="text-gray-500 ml-2">- Music App</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="research">
              <div className="flex justify-between items-center group my-2">
                <div>
                  <Link
                    href="https://github.com/iamAbhishekkumar/Image-Reconstruction-using-GA"
                    className="text-white hover:underline font-mono"
                  >
                    image reconstruction using genetic algorithm
                  </Link>
                  <span className="text-gray-500 ml-2">
                    - generate code using prompt/json using ai
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center group">
                <div>
                  <Link
                    href="https://github.com/iamAbhishekkumar/The-Copter-with-NEAT"
                    className="text-white hover:underline font-mono"
                  >
                    copter game with NEAT
                  </Link>
                  <span className="text-gray-500 ml-2">
                    - ai plays the Copter Game using NEAT Algorithm
                  </span>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
}
