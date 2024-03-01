import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import WithdrawDepositComponent from "./components/WithdrawDepositComponent";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WithdrawDepositComponent />
      <Footer/>
    </div>
  );
}

export default App;
