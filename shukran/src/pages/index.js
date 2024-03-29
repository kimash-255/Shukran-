import Image from "next/image";
import { Inter } from "next/font/google";

import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Events from "@/components/events";
import Layout from "./Layout";
import Accommodation from "@/components/accomodation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

    <div>
    <Layout>
      
    </Layout>
     <Hero />
     <Events/>
     <Accommodation/>
    <Footer/>
    </div>
    
  );
}
