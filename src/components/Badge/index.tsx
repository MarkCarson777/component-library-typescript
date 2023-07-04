type BadgeProps = {
  text: string;
  color?: string;
};

export const Badge: React.FC<BadgeProps> = ({ text, color }) => {
  const badgeStyle = {
    backgroundColor: color || "#000000",
  };

  return (
    <span className="badge" style={badgeStyle}>
      {text}
    </span>
  );
};
