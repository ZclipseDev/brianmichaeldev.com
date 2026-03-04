import React, { useState } from "react";
import Window from "./Window";
import Button from "./Button";
import star from "../assets/Star.png";
import glass from "../assets/Magnifying-Glass.png";
import left from "../assets/Left-Arrow.png"

type QuickGameWindowProps = {
  t: string;
  thumb: string;
  children: React.ReactNode;
  expandedContent: React.ReactNode;
};

export function QuickGameWindow({ t, thumb, children, expandedContent }: QuickGameWindowProps) {
  const [expanded, setExpanded] = useState(false);

  const wrappedExpandedContent = (
    <div>
      {expandedContent}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <Button icon={left} onClick={() => setExpanded(false)}>
          Back
        </Button>
      </div>
    </div>
  );

  return (
    <Window
      title={t}
      icon={star}
      width={600}
      expanded={expanded}
      onToggleExpanded={() => setExpanded(prev => !prev)}
      expandedContent={wrappedExpandedContent}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: "0 auto",
          gap: "20px",
        }}
      >
        <img
          src={thumb}
          style={{
            maxWidth: "200px",
            flex: "1 1 200px",
          }}
        />
        <div style={{ flex: "1 1 200px", minWidth: "150px" }}>
          {children}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <Button icon={glass} onClick={() => setExpanded(true)}>
          Learn More!
        </Button>
      </div>
    </Window>
  );
}