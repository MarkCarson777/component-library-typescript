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
  Required<{
    onClick: () => void;
    size: "xs" | "s" | "m" | "l" | "xl" | "auto";
  }>;

const sizes = {
  xs: 24,
  s: 38,
  m: 40,
  l: 50,
  xl: 60,
  auto: "auto",
};

export function Button(props: ButtonProps) {
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    style,
    label,
    icon,
    size,
    disabled,
    pending,
    className,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={classnames(
        className,
        "relative inline-flex justify-center items-center font-semibold text-white leading-none outline-none space-x-1",
        {
          "bg-blue-500": primary,
          "bg-gray-500": secondary,
          "bg-green-500": success,
          "bg-yellow-500": warning,
          "bg-red-500": danger,
        },
        size === "xs" && "px-2 rounded",
        (size === "s" || size === "m" || size === "l") && "px-5 rounded-lg",
        size === "xl" && "px-5 rounded-lg text-lg",
        (disabled || pending) && "opacity-50 pointer-events-none"
      )}
      style={{
        height: sizes[size],
        ...style,
      }}
      disabled={disabled}
    >
      <div
        className={classnames(
          size === "xs" && "text-xs space-x-2",
          size === "s" && "text-sm space-x-3",
          (size === "m" || size === "l" || size === "xl") && "space-x-3"
        )}
      >
        {children}
        {pending && <div className="text-[0.5rem]">Insert Loader</div>}
      </div>
    </button>
  );
}
