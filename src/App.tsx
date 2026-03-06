import name from "./assets/coolname.png";
import Window from "./components/Window";
import brian from "./assets/brian-portrait-ignite-retro.png"
import "./index.css"
import dinoTitle from "./assets/dino-might-title.png"
import { QuickGameWindow } from "./components/QuickGameWindow";
import skyTitle from "./assets/skytitle.png"
import primisTitle from "./assets/primis.png"
import message from "./assets/Message.png"
import dinoLogo from "./assets/Dino-might-logo-transparent.png"
import dinoScreenshot0 from "./assets/dinoscreenshot0.png"
import ExpandedContent from "./components/ExpandedContent";
import dinoMain from "./assets/dinokeyart.png"
import dinoScreenshot1 from "./assets/dinoscreenshot1.png"
import dinoMdev from "./assets/dinomdev.jpg"
import skyLogo from "./assets/skylogo.png"
import githubProject from "./assets/githubproject.png"
import capstoneClass from "./assets/class.jpg"
import skyScreenshot0 from "./assets/skyscreenshot0.jpg"
import primis0 from "./assets/primis0.jpg"
import primis1 from "./assets/primis1.jpg"
import primis2 from "./assets/primis2.jpg"
import primis3 from "./assets/primis3.jpg"
import emailIcon from "./assets/email.png"
import githubIcon from "./assets/github.png"
import linkedinIcon from "./assets/linkedin.png"

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
            maxWidth: "80%"
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
        <div
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "10px auto",
            gap: "10px",
            maxWidth: "30%"
          }}
        >
          <a href="mailto:brianmic28@gmail.com">
            <img
              src={emailIcon}
              style={{maxWidth: "80%"}}
            />
          </a>
          <a href="https://github.com/ZclipseDev" target="_blank" rel="noopener noreferrer">
            <img
              src={githubIcon}
              style={{maxWidth: "80%"}}
            />
          </a>
          <a href="https://www.linkedin.com/in/brian-michael-dev/" target="_blank" rel="noopener noreferrer">
            <img
              src={linkedinIcon}
              style={{maxWidth: "80%"}}
            />
          </a>
        </div>
        <p>Welcome to my website! I'm Brian, part-time games programmer, full-time awesome. I can't wait to show you what I've been working on!!!</p>
      </Window>
      <QuickGameWindow
        t="Dino-Might"
        thumb={dinoTitle}
        children="Dino-Might is a local multiplayer free-for-all in which players jump atop other dinos in order to be crowned the winner. I had the role of gameplay programmer, 
        and had a blast working with the team. I even had the opportunity to run a booth at several different conferences!"
        expandedContent={
        <ExpandedContent
          popup="https://store.steampowered.com/app/3613070/DinoMight/"
          logo={dinoLogo}
          introScreenshot={dinoMain}
          introText="In this 2D party platformer, up to four players can become dinos in order to jump and defeat their foes in a Joust-like manner. Various powerups decorate each stage in order to give each player a fighting chance. I helped make this game with a couple of my friends, and it’s been so rewarding!"
          cards={[
            {
              image: dinoScreenshot0,
              text: "Dino-Might was the first big project that I joined mid-production. As such, not only did I have to adapt to the current codebase, but I also learned how to best utilize Unity Version Control. After getting the hang of things, I also aided in the large-scale refactor process of the game from game jam code.",
            },
            {
              image: dinoScreenshot1,
              text: "Specifically, I worked with the stats system pre-refactor. Various aspects of the game are recorded and revealed at the end of each match, all shown within a beautiful post-game stats screen. For the refactor, I did most of the work with the player controller, minimizing code from a billion lines to a number I can actually count to. Powerups were included in this process.",
            },
            {
              image: dinoMdev,
              text: "One of my favorite parts of game development is showing off what I’ve been working on, and Dino-Might had plenty of opportunities for that! We’ve got to showcase the game from locations ranging from coast to coast. Several conferences we’ve showcased at are GDC, PAX East, and M+DEV!",
            },
          ]}
        />}>
      </QuickGameWindow>
      <QuickGameWindow
        t="Sky Die"
        thumb={skyTitle}
        children="Sky Die is a local multiplayer brawl in which players dodge obstacles (and other players) while falling through the skies. This was created during my capstone game development class. I had the role of programming/project lead, organizing and leading class meetings, resolving merge conflicts, and providing the tape wherever it needed to be. Very proud of our Steam release!"
        expandedContent={
        <ExpandedContent
          popup="https://store.steampowered.com/app/3715480/Sky_Die/"
          logo={skyLogo}
          introScreenshot="https://youtu.be/_YtDhcG0sfs?si=sfr0TpnNiekV3DIy"
          introText="Tasked with creating a local multiplayer game, my capstone class bore the idea of Sky Die, in which players select from four playable characters, each with their own unique abilities. After selecting a stage, these characters are then dropped from the sky, aiming to charge and dash into each other to contact various hazards. The last one falling wins!"
          cards={[
            {
              image: githubProject,
              text: "My primary role on Sky Die was the project manager. I utilized a GitHub project board to keep all tasks accounted for so no one could ask the dreaded “what am I supposed to be doing?” Additionally, all aspects were added to the board very early on and broken up into manageable chunks to be completed within the one semester we were given.",
            },
            {
              image: capstoneClass,
              text: "I relied very heavily on my team, and I respected their requests. One such request was having a designated “office hours” time, to which I obliged. Even outside of this time period, I would meet with students after class to help them with aspects they were stuck with. I even bought pizza for our first prototype!",
            },
            {
              image: skyScreenshot0,
              text: "Communicating with my fellow leads was a huge part of the project. I tried my best to be the slayer of scope-creep, even going as far as writing the majority of our twenty-page game design document. I would be amiss to say we agreed on everything, but the fact that we could talk through our thought processes and come to a conclusion and compromise are what really matter. I am happy to say that we were the second UWW capstone class to get our game onto Steam!",
            },
          ]}
        />}>
      </QuickGameWindow>
      <QuickGameWindow
        t="Primis"
        thumb={primisTitle}
        children="During my Freshman and Sophomore years, I was employed at Roberta’s Art Gallery in the University of Wisconsin-Whitewater campus. For each exhibit, we were responsible for installing the art pieces. This included many measurements that would oftentimes result in miscalculations and confusion. As a result of this, I created a program that did all the calculations for us, making work more efficient."
        expandedContent={
        <ExpandedContent
          popup="https://www.uww.edu/news/archive/2023-03-art-gallery-magd-major"
          introScreenshot={primis1}
          introText="Primis is a tool created in Unity that aids users in calculating where to drill screws into walls to hang art. The program also has a visual component, meaning that users can envision what the wall would look like before hanging the art. Users input the height, width, and wire tautness (wire holding the art piece) measurements into the program, and it outputs exactly where each screw needs to be placed."
          cards={[
            {
              image: primis2,
              text: "My supervisor was a big advocate for encouraging my coworkers and I to try and utilize our areas of study as much as possible. After I pitched Primis, she was all aboard! I’m very glad to have been given the chance to put my studies into practice in the workplace.",
            },
            {
              image: primis0,
              text: "I was actually interviewed about Primis! It was an honor to have my program deemed important enough to warrant an official University of Wisconsin-Whitewater article. In it, I discussed my detection of a problem and my need to solve it. The article can be read here!",
            },
            {
              image: primis3,
              text: (
              <>
                I was actually interviewed about Primis! It was an honor to have my program deemed important enough to warrant an official University of Wisconsin-Whitewater article. In it, I discussed my detection of a problem and my need to solve it. {" "}
                <a
                  href="https://www.uww.edu/news/archive/2023-03-art-gallery-magd-major"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The article can be read here!
                </a>
                </>
              ),
            },
          ]}
        />}>
      </QuickGameWindow>
    </div>
  );
}