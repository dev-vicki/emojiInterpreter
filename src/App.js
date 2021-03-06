import { useState } from "react";
import "./styles.css";

// emoji database
const emojiDictionary = {
  "đŖââī¸": "Person Rowing Boat",
  "â°ī¸": "Mountain",
  "đ": "Volcano",
  "đģ": "Mount Fuji",
  "âē": "Tent",
  "đī¸": "Camping",
  "đī¸": "Desert",
  "đī¸": "Beach with Umbrella",
  "đī¸": "Desert Island",
  "đī¸": "National Park",
  "đī¸": "Stadium",
  "đī¸": "Classic Building",
  "đī¸": "Building Construction",
  "đŊ": "Statue of Liberty",
  "đŧ": "Tokyo Tower",
  "đĻ": "Bank",
  "đ¨": "Hotel",
  "đĢ": "School",
  "đĨ": "Hospital",
  "đŦ": "Department Store",
  "đ­": "Factory",
  "đ¤": "Post Office",
  "đ°": "Castle",
  "đĸ": "Office Building",
  "đī¸": "Houses",
  "âĒ": "Church",
  "đ": "Mosque",
  "đ": "Hindu Temple",
  "đ": "Synagogue",
  "âŠī¸": "Shinto Shrine",
  "đ": "Kaaba",
  "â˛": "Fountain",
  "đ": "Foggy",
  "đ": "Night with Stars",
  "đī¸": "Cityscape",
  "đ": "Cityscape at Dusk",
  "đ": "Sunrise Over Mountains",
  "đ": "Sunrise",
  "đ": "Sunset",
  "đ": "Bridge at Night",
  "đĸ": "Roller Coaster",
  "đ": "Locomotive",
  "đ": "Railway Car",
  "đ": "Bullet Train",
  "đ": "Train",
  "đ": "Bus",
  "đ": "Ambulance",
  "đ": "Fire Engine",
  "đ": "Police Car",
  "đ": "Car",
  "đ": "Delivery Truck",
  "đī¸": "Motorcycle",
  "đē": "Auto Rickshaw",
  "đ˛": "Bicycle",
  "âŊ": "Fuel Pump",
  "âī¸": "Airplane",
  "đĸ": "Ship",
  "đ": "Helicopter",
  "đ": "Roc8",
  "đ°ī¸": "Satellite",
  "đ": "Milky Way",
  "đ": "Fireworks",
  "đ": "Sparkler",
  "đ": "Passport Control",
  "đ": "Customs",
  "đ": "Baggage Claim",
  "đ": "Left Luggage"
};
// converting the objects into array using object.keys method in JS
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(""); //using useStare in React

  // whatever the user inputs the emoji it is rendered and matched with DB
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    // var meaning = emojiDictionary[userInput];
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else setMeaning("That's a new one! We don't have this in our database");
  }

  // when user clicks on the emojis displayed in View Layer
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  //  this things are displayed in the page
  return (
    <div className="App">
      <h1>
        E-moji{" "}
        <span role="img" aria-label="emoji with lens" id="header-emoji">
          {" "}
          đ{" "}
        </span>{" "}
      </h1>
      <div
        style={{
          fontSize: "1.3rem",
          marginBottom: "1.5em"
        }}
      >
        An Interpreter for Travel & Places
      </div>
      <input
        placeholder={"Enter an emoji here to know the meaning..."}
        style={{ backgroundColor: "#DBABBE" }}
        onChange={emojiInputHandler}
      />
      <h2>{meaning} </h2>
      <div
        style={{
          fontSize: "1.4rem",
          marginTop: "1.5em",
          marginBottom: "1em"
        }}
      >
        Emojis We Know
      </div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: ".5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}

      <footer>
        <p>
          <span role="img" aria-label="emoji with Red Heart">
            Made with â¤ī¸ by Vicki
          </span>
        </p>
      </footer>
    </div>
  );
}

/**
 * VISER
 * View
 * user has to Interact
 * update the State in Event handler
 * Render (coonsume it)
 */
