import "./styles/App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { MyRoutes } from "./routes/MyRoutes";

function App() {
  return (
    <div>
      <MyRoutes />
    </div>
  );
}

export default App;
