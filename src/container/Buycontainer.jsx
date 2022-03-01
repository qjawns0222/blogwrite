import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Buy from "../Components/Buy";
import store from "../context/store";
export default function Buycontainer() {
  const value = useContext(store);

  const navigate = useNavigate();
  let st = "";

  value.data.map((p) => {
    if (p.addition.length > 15) {
      for (let i = 0; i <= 10; i++) {
        st = st + p.addition[i];
      }
      p.summary = st + "....";
    } else {
      p.summary = p.addition;
    }
    return p;
  });
  const delvalue = (find) => {
    value.data = value.data.filter((p) => {
      if (p.id != find.target.id) return p;
    });
    navigate("/order");
  };

  return <Buy value={value} delvalue={delvalue} />;
}
