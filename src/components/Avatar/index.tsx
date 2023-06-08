import classnames from "classnames";

type AvatarProps = {
  name: string;
  imageUrl: string;
  size: "xs" | "s" | "m" | "l" | "xl";
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
  const { name, imageUrl, size, onClick } = props;

  return (
    <div
      className={classnames(onClick && "cursor-pointer")}
      style={{
        width: sizes[size],
        height: sizes[size],
        borderRadius: "50%",
        overflow: "hidden",
      }}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};
