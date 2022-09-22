import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../styles/NotPermission.css'

export const NotPersmission = () => {
    return (
       <div className="flex justify-content-between flex-column w-full h-screen bg-indigo-300" >
        <Header />
          
        <h1 className="title ">Você não possui permissão para acessar a página!</h1>

      
      <Footer />
    </div>
    
  );
};
