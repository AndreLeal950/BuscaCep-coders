import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import img from '../image/404.png';
import '../styles/Notfound.css'

export const NotFound = () => {
  return (
    <div className="HomePage flex justify-content-between flex-column w-full h-screen">
      <Header />
      <h1>Esta pagina não existe</h1>
      <img className='img' src={img} alt='Not Found..'/> 
      
      <Footer />
    </div>
  );
};
