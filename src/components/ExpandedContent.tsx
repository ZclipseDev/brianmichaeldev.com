import React from "react";

interface CardData {
  image: string;
  text: string;
}

interface ExpandedContentProps {
  logo: string;
  introScreenshot: string;
  introText: string;
  cards: CardData[];
}

const ExpandedContent: React.FC<ExpandedContentProps> = ({
  logo,
  introScreenshot,
  introText,
  cards,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px", // outer gap
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Game Logo"
        style={{
          width: "500px",
          maxWidth: "90%",
          height: "auto",
        }}
      />

      {/* Screenshot + Intro */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
          width: "100%",
        }}
      >
        <img
          src={introScreenshot}
          alt="Intro Screenshot"
          style={{
            flex: "1 1 350px",
            maxWidth: "600px",
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />

        <p
          style={{
            flex: "1 1 350px",
            maxWidth: "400px",
            margin: 0,
          }}
        >
          {introText}
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: "1 1 400px",
              maxWidth: "500px",
              gap: "10px",
            }}
          >
            <img
              src={card.image}
              alt={`Card ${index}`}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <p style={{ margin: 0 }}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandedContent;