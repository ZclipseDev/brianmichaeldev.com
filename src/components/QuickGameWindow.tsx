import Window from "./Window";
import Button from "./Button";

type QuickGameWindowProps = {
  t: string;
  thumb: string;
children: React.ReactNode;
};

export function QuickGameWindow({ t, thumb, children }: QuickGameWindowProps) {
  return (
    <Window
        title={t}
        width={600}
    >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "0 auto",
            gap: "20px"
          }}
        >
          <img
            src={thumb}
            style={{
              maxWidth: "50%",
              flex: "1 1 200px",
            }}
          />
          <div style={{ flex: "1 1 200px", minWidth: "150px" }}>
            <p style={{ textAlign: "left" }}>{children}</p>
          </div>
        </div>
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
          <Button
          >
            Learn More!
          </Button>
        </div>
    </Window>
  );
}