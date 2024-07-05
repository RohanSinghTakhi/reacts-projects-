import { useReducer } from 'react';
import './App.css';
import Layout from "./components/Layout";
import OptButton from './components/OptButton';

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "generate_otp":
        const otp = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
        console.log("Generated OTP:", otp);
        return otp;
      case "reset":
        console.log("Reset OTP");
        return [0, 0, 0, 0];
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, [0, 0, 0, 0]);

  const generateOtp = () => {
    dispatch({ type: "generate_otp" });
  };

  const resetOtp = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <div className="box1">
        <h2>OTP GENERATOR</h2>
        <Layout otp={state} />
        <OptButton inc={generateOtp} res={resetOtp} />
      </div>
    </>
  );
}

export default App;
