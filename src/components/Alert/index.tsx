import classnames from "classnames";

type AlertProps = {
  message: string;
  type: "success" | "info" | "warning" | "error";
};

export const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const alertType = (): string => {
    switch (type) {
      case "success":
        return "Success";
      case "error":
        return "Error";
      case "warning":
        return "Warning";
      case "info":
        return "Info";
      default:
        return "";
    }
  };

  return (
    <div
      className={classnames(
        "flex items-center justify-between px-4 border-4 rounded drop-shadow h-[64px]",
        type === "success" && "border-green-500",
        type === "info" && "border-blue-500",
        type === "warning" && "border-yellow-500",
        type === "error" && "border-red-500"
      )}
    >
      <div>
        <span className="font-semibold mr-2">{alertType()}</span>
        <span>{message}</span>
      </div>
      <span>
        <svg
          className="fill-current h-6 w-6"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};
