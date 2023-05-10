import classnames from "classnames";

import styles from "./index.module.css";

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
    pending?: boolean;
    disabled?: boolean;
  }> &
  Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean> &
  Required<{
    children: React.ReactNode;
    size: "xs" | "s" | "m" | "l" | "xl" | "auto";
    onClick: () => void;
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
        !disabled && primary && "hover:bg-blue-600",
        !disabled && secondary && "hover:bg-gray-600",
        !disabled && success && "hover:bg-green-600",
        !disabled && warning && "hover:bg-yellow-600",
        !disabled && danger && "hover:bg-red-600",
        (disabled || pending) && "opacity-50 pointer-events-none",
        size === "xs" && styles.xs,
        size === "s" && styles.sm,
        size === "m" && styles.med,
        size === "l" && styles.lg,
        size === "xl" && styles.xlg,
        size === "auto" && styles.auto
      )}
      style={{
        height: sizes[size],
        ...style,
      }}
    >
      <div
        className={classnames(
          "flex items-center",
          size === "xs" && "text-xs space-x-2",
          size === "s" && "text-sm space-x-3",
          (size === "m" || size === "l" || size === "xl") && "space-x-3"
        )}
      >
        {pending && <div className="text-[0.5rem]">Insert Loader</div>}
        {children}
      </div>
    </button>
  );
}
