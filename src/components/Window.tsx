import React, { useState, useEffect } from "react";

interface WindowProps {
  title: string;
  icon?: string;
  children?: React.ReactNode;
  expandedContent?: React.ReactNode;
  width?: number;
  expanded?: boolean;
  onToggleExpanded?: () => void;
}

const Window: React.FC<WindowProps> = ({
  title,
  icon,
  children,
  expandedContent,
  width = 400,
  expanded = false,
  onToggleExpanded
}) => {
  const [mainVisible, setMainVisible] = useState(false);
  const [expandedVisible, setExpandedVisible] = useState(false);

  useEffect(() => {
    if (!expanded) {
      const timeout = setTimeout(() => setMainVisible(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setMainVisible(false);
    }
  }, [expanded]);

  useEffect(() => {
    if (expanded) {
      const timeout = setTimeout(() => setExpandedVisible(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setExpandedVisible(false);
    }
  }, [expanded]);

  return (
    <div
      style={{
        width: expanded ? width + 700 : width,
        margin: "20px auto",
        border: "2px solid #808080",
        borderRadius: 4,
        background: "#c0c0c0",
        boxShadow: "2px 2px #fff inset, -2px -2px #404040 inset",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.4s ease",
        maxWidth: "100%",
      }}
    >
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
          {icon && <img src={icon} alt="icon" style={{ height: 16, marginRight: 4 }} />}
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
            onClick={onToggleExpanded}
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
            onClick={onToggleExpanded}
          >
            ×
          </button>
        </span>
      </div>

      <div
        style={{
          padding: 10,
          background: "#fff",
          border: "2px solid #555",
          overflow: "auto",
        }}
      >
        {!expanded && children && (
          <div
            style={{
              opacity: mainVisible ? 1 : 0,
              transform: mainVisible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 2.25s ease, transform 0.5s ease",
            }}
          >
            {children}
          </div>
        )}
        {expanded && expandedContent && (
          <div
            style={{
              opacity: expandedVisible ? 1 : 0,
              transform: expandedVisible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 2.25s ease, transform 0.5s ease",
            }}
          >
            {expandedContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Window;