import Header from "@/app/components/header";
import Bio from "@/app/components/bio";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-500 p-8 max-w-4xl mx-auto">
      <Header />
      <Bio />
      {/* TODO : 
      1. Added GH Page Configurations
      2. Added Starting Animation of Fade In
      3. Change the font
       */}
    </div>
  );
}
