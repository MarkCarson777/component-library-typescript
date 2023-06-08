import classnames from "classnames";

type AvatarProps = {
  name: string;
  imageUrl: string;
  size: "xs" | "s" | "m" | "l" | "xl";
  shape: "circle" | "square" | "rectangle";
  className: string;
  onClick?: () => void;
};

const sizes = {
  xs: 32,
  s: 40,
  m: 50,
  l: 60,
  xl: 80,
};

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { name, imageUrl, size, shape, onClick, className } = props;

  return (
    <div
      className={classnames(
        "relative inline-flex justify-center items-center overflow-hidden bg-red-500 border border-red-500 border-opacity-10 text-white font-semibold",
        onClick && "cursor-pointer",
        shape === "circle" && "rounded-full",
        (shape === "square" || shape === "rectangle") && "rounded",
        className
      )}
      style={{
        width: shape === "rectangle" ? sizes[size] * 1.5 : sizes[size],
        height: sizes[size],
        borderRadius: "50%",
        overflow: "hidden",
      }}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
        style={{ backgroundImage: imageUrl }}
      />
    </div>
  );
};
