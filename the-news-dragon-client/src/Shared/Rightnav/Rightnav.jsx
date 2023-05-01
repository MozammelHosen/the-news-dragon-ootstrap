import React from "react";
import QZone from "../Q-Zone/QZone";

const Rightnav = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-purple-500">Login With </h1>
      <div>
        <button className="btn btn-outline btn-secondary my-2">
          Login With Google
        </button> <br />
        <button className="btn btn-outline btn-primary ">
          Login With GitHub
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-purple-500">Find Us On</h1>
        <button className="btn btn-outline btn-secondary my-2">
          Login With Google
        </button> <br />
        <button className="btn btn-outline btn-secondary my-2">
          Login With Google
        </button> <br />
        <button className="btn btn-outline btn-secondary my-2">
          Login With Google
        </button> 
      </div>
      <QZone/>
    </div>
  );
};

export default Rightnav;
