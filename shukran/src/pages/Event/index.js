import Image from "next/image";
import { Inter } from "next/font/google";


import Footer from "@/components/footer";
import Header from "@/components/header";
import Events from "@/components/events";


const inter = Inter({ subsets: ["latin"] });

const EventsPage = () => {
  return (
    <div>
      <Header />
      <Events />
      <Footer />
    </div>
  );
};

export default EventsPage;
