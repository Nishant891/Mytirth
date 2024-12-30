import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <div className="relative main">
        <video autoPlay loop muted playsInline className="bg__video">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <Navbar />
        <Landing />
      </div>
      <Gallery />
      <Footer />
    </>
  );
}
