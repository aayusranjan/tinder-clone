import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
        name: "Pokimane",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Pokimane_2019.png/330px-Pokimane_2019.png",
    },
    {
        name: "Valkyrae",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Valkyrae_for_100_Thieves_%28cropped%29.jpg/330px-Valkyrae_for_100_Thieves_%28cropped%29.jpg",
    },
    {
        name: "Alexandra Botez",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Alexbotez_2010_%28cropped%29.jpg/330px-Alexbotez_2010_%28cropped%29.jpg",
    },
    {
        name: "Nancy",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/180506_%EB%AA%A8%EB%AA%A8%EB%9E%9C%EB%93%9C_%EC%84%9C%EB%93%A0%EC%96%B4%ED%83%9D_%ED%8C%AC%EB%AF%B8%ED%8C%85_%281%29.jpg/375px-180506_%EB%AA%A8%EB%AA%A8%EB%9E%9C%EB%93%9C_%EC%84%9C%EB%93%A0%EC%96%B4%ED%83%9D_%ED%8C%AC%EB%AF%B8%ED%8C%85_%281%29.jpg",
    },
]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
            <TinderCard 
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) =>swiped(dir, person.name)}
            onCardLeftScreen={()=> outOfFrame(person.name)}
            >
                <div
                    style={{ backgroundImage: `url(${person.url})`}}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                </div>

            </TinderCard>
        ))}
        </div>
    </div>
    );
}

export default TinderCards;