import Window from "./Window";
import Button from "./Button";
import info from "../assets/msg_information-0.png"
import shutdown from "../assets/shut_down_with_computer-0.png"

type QuickGameWindowProps = {
  t: string;
  thumb: string;
children: React.ReactNode;
};

export function QuickGameWindow({ t, thumb, children }: QuickGameWindowProps) {
  return (
    <Window
        title={t}
        icon={shutdown}
        width={600}
    >
        <div
              style={{
                display: "flex",
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
                  maxWidth: "50%"
                }}
              />
              <div>
                <p style={{textAlign: "left"}}>{children}</p>
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
                icon={info}
              >
                Learn More!
              </Button>
            </div>
    </Window>
  );
}