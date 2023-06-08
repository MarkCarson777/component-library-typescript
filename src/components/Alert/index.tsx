type AlertProps = {
  message: string;
  type: "success" | "info" | "warning" | "error";
};

export const Alert: React.FC<AlertProps> = ({ message, type }) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};
