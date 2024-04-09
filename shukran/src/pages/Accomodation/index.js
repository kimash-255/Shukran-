import Accommodation from "@/components/Accommodation"; // Assuming this is the correct component name
import Layout from "../Layout";
import Footer from "@/components/Footer";

const AccommodationPage = () => {
  return (
    <>
      <Layout>
        <Accommodation />
      </Layout>
      <Footer />
    </>
  );
};

export default AccommodationPage;
