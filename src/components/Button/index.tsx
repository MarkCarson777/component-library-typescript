import classnames from "classnames";

import { Loader } from "../Loader";

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
        "relative inline-flex justify-center items-center font-semibold text-white leading-none outline-none",
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
        !disabled && !pending && primary && "hover:bg-blue-600",
        !disabled && !pending && secondary && "hover:bg-gray-600",
        !disabled && !pending && success && "hover:bg-green-600",
        !disabled && !pending && warning && "hover:bg-yellow-600",
        !disabled && !pending && danger && "hover:bg-red-600",
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
          size === "xs" && "text-xs",
          size === "s" && "text-sm",
          pending && "opacity-0"
        )}
      >
        {children}
      </div>
      {pending && (
        <Loader
          className={classnames(
            size === "xs" && "text-[0.5rem]",
            size === "s" && "text-[0.6rem]",
            size === "m" && "text-[0.7rem]",
            (size === "l" || size === "xl") && "text-[0.8rem]",
            size === "auto" && "text-[0.5rem]"
          )}
        />
      )}
    </button>
  );
}
