import Image from "next/image";
import { Inter } from "next/font/google";
import Drawer from "@/components/appdrawer";
import VideoGrid from "@/components/videoGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      
    <div className="flex">
      <Drawer></Drawer>
      <VideoGrid></VideoGrid>
    </div>
    
    </div>
  );
}
