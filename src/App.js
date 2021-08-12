import { useState } from "react";
import "./styles.css";

// emoji database
const emojiDictionary = {
  "🚣‍♂️": "Person Rowing Boat",
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
  "⛺": "Tent",
  "🏕️": "Camping",
  "🏜️": "Desert",
  "🏖️": "Beach with Umbrella",
  "🏝️": "Desert Island",
  "🏞️": "National Park",
  "🏟️": "Stadium",
  "🏛️": "Classic Building",
  "🏗️": "Building Construction",
  "🗽": "Statue of Liberty",
  "🗼": "Tokyo Tower",
  "🏦": "Bank",
  "🏨": "Hotel",
  "🏫": "School",
  "🏥": "Hospital",
  "🏬": "Department Store",
  "🏭": "Factory",
  "🏤": "Post Office",
  "🏰": "Castle",
  "🏢": "Office Building",
  "🏘️": "Houses",
  "⛪": "Church",
  "🕌": "Mosque",
  "🛕": "Hindu Temple",
  "🕍": "Synagogue",
  "⛩️": "Shinto Shrine",
  "🕋": "Kaaba",
  "⛲": "Fountain",
  "🌁": "Foggy",
  "🌃": "Night with Stars",
  "🏙️": "Cityscape",
  "🌆": "Cityscape at Dusk",
  "🌄": "Sunrise Over Mountains",
  "🌅": "Sunrise",
  "🌇": "Sunset",
  "🌉": "Bridge at Night",
  "🎢": "Roller Coaster",
  "🚂": "Locomotive",
  "🚃": "Railway Car",
  "🚅": "Bullet Train",
  "🚆": "Train",
  "🚌": "Bus",
  "🚑": "Ambulance",
  "🚒": "Fire Engine",
  "🚓": "Police Car",
  "🚗": "Car",
  "🚚": "Delivery Truck",
  "🏍️": "Motorcycle",
  "🛺": "Auto Rickshaw",
  "🚲": "Bicycle",
  "⛽": "Fuel Pump",
  "✈️": "Airplane",
  "🚢": "Ship",
  "🚁": "Helicopter",
  "🚀": "Roc8",
  "🛰️": "Satellite",
  "🌌": "Milky Way",
  "🎆": "Fireworks",
  "🎇": "Sparkler",
  "🛂": "Passport Control",
  "🛃": "Customs",
  "🛄": "Baggage Claim",
  "🛅": "Left Luggage"
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
          🔎{" "}
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
            Made with ❤️ by Vicki
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
