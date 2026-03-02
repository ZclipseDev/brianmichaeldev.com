import React from "react";

type Props = {
  children: React.ReactNode;
  icon?: string;
  href?: string;
  onClick?: () => void;
  width?: string | number;
};

export default function Button({
  children,
  icon,
  href,
  onClick,
  width = "auto"
}: Props) {
  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    padding: "4px 10px",
    width,
    background: "#c0c0c0",
    color: "#000",
    fontWeight: "bold",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#dfdfdf #808080 #808080 #dfdfdf",
    cursor: "pointer",
    textDecoration: "none",
    userSelect: "none"
  };

  const content = (
    <>
      {icon && <img src={icon} style={{ width: 16, height: 16 }} />}
      {children}
    </>
  );

  if (href)
    return (
      <a href={href} style={style}>
        {content}
      </a>
    );

  return (
    <button style={style} onClick={onClick}>
      {content}
    </button>
  );
}