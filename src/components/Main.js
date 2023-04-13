import React from "react";
import Card from "./Card";
import greekSalad from "../assets/Salad.jpg";
import baklava from "../assets/baklava.jpg";
import cremaCatalana from "../assets/cremacatalana.jpg";

const specialsData = [
  {
    img: baklava,
    title: "Baklava",
    price: 4.99,
    description:
      "A layered pastry dessert made of filo pastry, filled with chopped nuts, and sweetened with syrup or honey.",
  },
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: cremaCatalana,
    title: "Crema Catalana",
    price: 7.00,
    description:
      "A delicious dessert flavored with citrus peel (lemon and orange) and cinnamon.",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <div className="top">
          <h1>Our Specials</h1>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;
