import '../styles/Home.css'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export const HomePage = () => {
  return (
    <div className="HomePage flex justify-content-between flex-column w-full h-screen bg-indigo-300">
      <Header />
      <h1 className='title'>Conteúdo principal</h1>
      <Footer />
    </div>
  );
};
