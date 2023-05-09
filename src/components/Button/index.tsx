import classnames from "classnames";
import { Link } from "react-router-dom";

type ButtonProps = {
  size: "md";
  path: string;
  className?: string;
  style?: object;
  color?: "primary" | "secondary";
  label?: string;
  icon?: string;
  disabled?: boolean;
  pending?: boolean;
  onClick?: () => void;
};

const sizes = {
  md: 40,
};

export function Button(props: ButtonProps) {
  const {
    className,
    style,
    label,
    icon,
    path,
    size,
    color,
    disabled,
    pending,
    onClick,
    ...other
  } = props;

  const Component = path ? (path.startsWith("/") ? Link : "a") : "button";

  return (
    <Component
      className={classnames(
        "relative inline-flex justify-center items-center font-semibold text-white leading-none outline-none space-x-1",
        color === "primary" && "bg-blue-500",
        color === "secondary" && "bg-red-500",
        size === "md" && "px-4 rounded-lg",
        (disabled || pending) && "opacity-50 pointer-events-none",
        className
      )}
      style={{
        height: sizes[size],
        ...style,
      }}
      to={path}
      disabled={disabled}
      onClick={onClick}
      {...other}
    >
      {/* {icon && (
        <span className="relative h-full inline-flex items-center">
          <Icon className="h-[16px]" icon={icon} />
        </span>
      )} */}
      <span>{label}</span>
      {/* {pending && (
        <div className="text-[0.5rem]">
          <Loader />
        </div>
      )} */}
    </Component>
  );
}
