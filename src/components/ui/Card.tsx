import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  tabIndex?: number;
  role?: string;
  "aria-label"?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
  onClick,
  onKeyDown,
  tabIndex,
  role,
  "aria-label": ariaLabel,
}) => {
  return (
    <div
      className={`
            card
            ${hover ? "card-hover" : ""}
            ${className}
            ${onClick}
            ${onKeyDown}
            ${tabIndex}
            ${role}
            ${ariaLabel}
        `}
    >
      {children}
    </div>
  );
};

export default Card;
