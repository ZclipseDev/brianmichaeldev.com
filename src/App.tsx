import name from "./assets/coolname.png";
import Window from "./components/Window";
import brian from "./assets/brian-portrait-ignite-retro.png"
import "./index.css"
import dinoTitle from "./assets/dino-might-title.png"
import { QuickGameWindow } from "./components/QuickGameWindow";
import carTitle from "./assets/ccgthtm6.png"
import skyTitle from "./assets/skydie.jpg"
import primisTitle from "./assets/primis.png"
import message from "./assets/Message.png"
import dinoLogo from "./assets/Dino-might-logo-transparent.png"

export default function App() {
  return (
    <div style={{ padding: 50 }}>
      <a href="/">
        <img
          src={name}
          style={{
            display: "block",
            margin: "0 auto",
            maxHeight: "100px",
            maxWidth: "80%",
            cursor: "pointer"
          }}
        />
      </a>
      <Window
        title="Hello World"
        icon={message}
        width={600}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "0 auto"
          }}
        >
          <img
            src={brian}
            style={{
              maxWidth: "50%"
            }}
          />
        </div>
        <p>Welcome to my website! I'm Brian, part-time games programmer, full-time awesome. I can't wait to show you what I've been working on!!!</p>
      </Window>
      {/* <QuickGameWindow
        t="Car Car Goes to Hell: The Musical"
        thumb={carTitle}
      >
        What started as a joke quickly became a dream, and soon… a reality! This parody point-and-click adventure game begins development very soon and aims to blend 
        gameplay with musical elements in a seamless fashion. Serving as the director, writer, and lead programmer of the project, I can’t wait to enter the inferno.
      </QuickGameWindow> */}
      <QuickGameWindow
        t="Dino-Might"
        thumb={dinoTitle}
        children="Dino-Might is a local multiplayer free-for-all in which players jump atop other dinos in order to be the crowned the winner. I had the role of gameplay programmer, 
        and had a blast working with the team. I even had the opportunity to run a booth at several different conferences! Dino-Might was created in Unity."
        expandedContent={
          <img
            src={dinoLogo}
            style={{
              maxWidth: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              margin: "0 auto"
            }}
          />
        }>
      </QuickGameWindow>
      {/* <QuickGameWindow
        t="Sky Die"
        thumb={skyTitle}
      >
        Sky Die is a local multiplayer brawl in which players dodge obstacles (and other players) while falling through the skies. This was created during my capstone game 
        development class. I had the role of programming/project lead, organizing and leading class meetings, resolving GitHub merge conflicts, and providing the tape 
        wherever it needed to be. Very proud of our Steam release! Sky Die was created in Unity.
      </QuickGameWindow>
      <QuickGameWindow
        t="Primis"
        thumb={primisTitle}
      >
        During my Freshman and Sophomore years, I was employed at Roberta’s Art Gallery in the University of Wisconsin-Whitewater campus. For each exhibit, we were 
        responsible for installing the art pieces. This included many measurements that would oftentimes result in confusion. As a result of this, I created a program 
        that did all the calculations for us, making work more efficient. Primis was created in Unity.
      </QuickGameWindow> */}
    </div>
  );
}