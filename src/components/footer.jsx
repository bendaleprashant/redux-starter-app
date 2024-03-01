import React from "react";
import { UseSelector, useSelector } from "react-redux";

export default function Footer() {
  const amount = useSelector((state) => state.amount);
  return (
      <div className="container-fluid">
        <br/>
        <br/>
        <br/>
        <button disabled={true} className="btn btn-warning">
            Your Balance: {amount}
          </button>
        </div>
      
  );
}
