// import Link from "next/link ";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
const layout = (props) => {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <main className="pb-32 mx-auto sm:max-w-screen-lg ">
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

export default layout;
