type AvatarProps = {
  name: string;
  imageUrl: string;
  size?: number;
};

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl, size = 40 }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default Avatar;
