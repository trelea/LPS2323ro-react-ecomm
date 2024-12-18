import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <main className='min-h-dvh'>
        <Navbar />
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
}
