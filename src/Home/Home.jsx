import React from "react";
import Card from "../components/cards/card";
import { products } from "../utils/productsData";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="allCards">
        {products.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Home;
