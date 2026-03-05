import React from "react";
import Button from "./Button";
import dots from "../assets/Message-Three-Dots.png"

interface CardData {
  image: string;
  text: React.ReactNode;
}

interface ExpandedContentProps {
  logo?: string;
  popup: string;
  introScreenshot: string;
  introText: string;
  cards: CardData[];
}

const ExpandedContent: React.FC<ExpandedContentProps> = ({
  logo,
  popup,
  introScreenshot,
  introText,
  cards,
}) => {
    const isYouTube = introScreenshot.includes("youtube.com") || introScreenshot.includes("youtu.be");
    const getYouTubeEmbedUrl = (url: string) => {
        const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return match ? `https://www.youtube.com/embed/${match[1]}` : "";
    };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
    {/* Logo */}
    {logo && (
        <img
            src={logo}
            alt="Game Logo"
            style={{
            width: "500px",
            maxWidth: "90%",
            height: "auto",
            }}
        />
    )}

      {/* Screenshot or Video and Intro */}
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
        {isYouTube ? (
          <iframe
            style={{
              flex: "1 1 350px",
              maxWidth: "600px",
              width: "100%",
              aspectRatio: "16/9",
            }}
            src={getYouTubeEmbedUrl(introScreenshot)}
            title="Intro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
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
        )}

        <div
            style={{
            flex: "1 1 350px",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            }}
        >
            <p style={{ margin: 0 }}>{introText}</p>
 
            <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                <Button onClick={() => window.open(popup, "_blank", "noopener,noreferrer")} icon={dots}>Check it out!</Button>
            </div>
        </div>
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