import "./styles.css";
import AllRoutes from './Components/Routes/AllRoutes';
import Navbar from "./Components/Navbar/Navbar.jsx"
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
