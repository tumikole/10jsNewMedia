import React, { useEffect, useState } from 'react';
import "./OtherServices.scss";
import Spinner from "../../../Spinners/Spinner";
import ViewMore from './ViewMore';

function OtherServices({ serviceAndPrice }) {
const [viewMore, setViewMore] = useState(false)
  useEffect(() => {
    const autoplayInterval = setInterval(moveCard, 4000);
    return () => clearInterval(autoplayInterval);
  }, []);

  const moveCard = () => {
    const stack = document.querySelector(".stack");
    const lastCard = stack.lastElementChild;
    if (lastCard.classList.contains("card")) {
      lastCard.classList.add("swap");
      setTimeout(() => {
        lastCard.classList.remove("swap");
        stack.insertBefore(lastCard, stack.firstElementChild);
      }, 1200);
    }
  };

  const handleClick = (e) => {
    const stack = document.querySelector(".stack");
    const card = e.target.closest(".card");
    if (card && card === stack.lastElementChild) {
      card.classList.add("swap");
      setTimeout(() => {
        card.classList.remove("swap");
        stack.insertBefore(card, stack.firstElementChild);
      }, 1200);
    }
  };

  return (
    <div className="userServices">

{viewMore ?
<ViewMore />

:
      <main>
        <div className="content">
          <h1>Other services</h1>
          <p>
            Welcome to La Pâtisserie Belle, where every bite is a journey into the
            exquisite world of finely crafted pastries. Our patisserie is
            dedicated to bringing you the most delicious and beautifully designed
            pastries that will delight your senses and elevate your taste
            experience. Nestled in the heart of the city, our patisserie is a
            haven for those who appreciate the finer things in life.
          </p>
          <button className="btn" onClick={() => setViewMore(true)}>Explore More</button>
        </div>

        <div className="stack">
          {serviceAndPrice && serviceAndPrice.map((serviceItem, i) => {
            const createdAtDate = new Date(serviceItem.created_at);
            const formattedDate = createdAtDate.toLocaleString();
            return (
              <div className="card" 
              key={serviceItem.id} 
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', 
                backgroundRepeat: "no-repeat", 
                backgroundSize:"cover", 
                color: "white"
                }}>
                <div className="card-title" style={{ color: "white" }}>{serviceItem.title}</div>
                <div className="card-content">
                  <ul>
                    {serviceItem.service_list.map((item, i) => (
                      <li key={i} style={{ color: "white" }}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="price" style={{ color: "white" }}>R {serviceItem.price}</div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
}
    </div>
  );
};

export default OtherServices;
