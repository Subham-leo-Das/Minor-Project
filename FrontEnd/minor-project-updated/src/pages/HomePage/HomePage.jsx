import Body from "../../components/Body/Body";
import ReviewCard from "../../components/Body/ReviewCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default function HomePage() {
    const scrollToFooter = () => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <>

      <div className="Body">
      <Navbar onContactUsClick={scrollToFooter} />
        <Body/>
        <ReviewCard/>
        <Footer/>
      </div>
      
    </>
  );
}
