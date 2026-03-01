import name from "./assets/coolname.png";
import Window from "./components/Window";
import smiley from "./assets/utopia_smiley.png"

export default function App() {
  return (
    <div style={{ padding: 50 }}>
      <img src={name} style={{
        display: "block",
        margin: "0 auto",
        maxHeight: "100px",
        maxWidth: "80%"
      }}/>
      <Window
        title="Hello World"
        icon={smiley}
        width={"40%"}
      >
        <p>hi you're probably looking for <a href="https://zclipsedev.com/">zclipsedev.com</a></p>
      </Window>
    </div>
  );
}