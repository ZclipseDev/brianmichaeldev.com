import React from "react";

interface WindowProps {
  title: string;
  icon?: string;
  children?: React.ReactNode;
  width?: string | number;
}

const Window: React.FC<WindowProps> = ({
  title,
  icon,
  children,
  width = "80%",
}) => {
  return (
    <div
      style={{
        width,
        margin: "20px auto",
        border: "2px solid #808080",
        borderRadius: 4,
        background: "#c0c0c0",
        boxShadow: "2px 2px #fff inset, -2px -2px #404040 inset",
        display: "flex",
        flexDirection: "column",
        maxWidth: "80%"
      }}
    >
      {/* Title Bar */}
      <div
        style={{
          background: "linear-gradient(to right, #341539, #5A4AE3)",
          color: "#fff",
          fontWeight: "bold",
          padding: "4px 6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid #808080",
        }}
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          {icon && (
            <img
              src={icon}
              alt="icon"
              style={{ height: 16, marginRight: 4 }}
            />
          )}
          {title}
        </span>
        <span style={{ display: "flex", alignItems: "center" }}>
          <button
            style={{
              fontSize: 12,
              width: 20,
              height: 20,
              lineHeight: "20px",
              textAlign: "center",
              marginLeft: 2,
              border: "2px solid #808080",
              background: "#c0c0c0",
              padding: 0,
            }}
          >
            -
          </button>
          <button
            style={{
              fontSize: 12,
              width: 20,
              height: 20,
              lineHeight: "20px",
              textAlign: "center",
              marginLeft: 2,
              border: "2px solid #808080",
              background: "#c0c0c0",
              padding: 0,
            }}
          >
            ×
          </button>
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          padding: 10,
          background: "#fff",
          border: "2px solid #555",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Window;