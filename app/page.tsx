import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Landing/>
      <Gallery/>
      <Footer/>
    </main>
  );
}
