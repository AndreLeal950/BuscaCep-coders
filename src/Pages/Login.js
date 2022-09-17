import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const LoginPage = () => {
  return (
    <div className="HomePage flex justify-content-between flex-column w-full h-screen bg-indigo-300">
      <Header />
      <div>
        <h1>Aqui é a sua area de login</h1>
      </div>

      <Footer />
    </div>
  );
};
