import Header from "@/app/components/header";
import Bio from "@/app/components/bio";
import Projects from "@/app/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-500 p-8 max-w-6xl mx-auto">
      <Header />
      <Bio />
      <Projects />
      {/* TODO : 
      1. Added GH Page Configurations
      2. Added Starting Animation of Fade In
      3. Change the font
       */}
    </div>
  );
}
