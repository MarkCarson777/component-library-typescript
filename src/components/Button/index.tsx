import classnames from "classnames";

type ExcludeFromTuple<T extends any[], U> = {
  [K in keyof T]: T[K] extends U ? never : T[K];
}[number];

type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
  ? E extends string
    ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
    : never
  : never & {};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    label?: string;
    icon?: string;
    pending?: boolean;
    disabled?: boolean;
  }> &
  Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean> &
  Required<{ onClick: () => void; size: "md" }>;

const sizes = {
  md: 40,
};

export function Button(props: ButtonProps) {
  const {
    className,
    primary,
    secondary,
    success,
    warning,
    danger,
    style,
    label,
    icon,
    size,
    color,
    disabled,
    pending,
    onClick,
    ...other
  } = props;

  return (
    <button
      className={classnames(
        className,
        "relative inline-flex justify-center items-center font-semibold text-white leading-none outline-none space-x-1",
        { "bg-blue-500": primary, "bg-red-500": secondary },
        size === "md" && "px-4 rounded-lg",
        (disabled || pending) && "opacity-50 pointer-events-none"
      )}
      style={{
        height: sizes[size],
        ...style,
      }}
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
    </button>
  );
}
