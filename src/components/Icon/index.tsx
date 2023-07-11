import { ReactElement } from "react";
import { ReactComponent as Search } from "./icons/search.svg";
import { ReactComponent as Star } from "./icons/star.svg";

interface IconProps {
  icon: string;
  color?: string;
  [key: string]: any;
}

interface IconComponents {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const icons: IconComponents = {
  Search,
  Star,
};

export function Icon({ icon, color, ...rest }: IconProps): ReactElement {
  const Component = icons[icon];
  const styles = {
    fill: color,
  };

  return (
    <div style={styles}>
      <Component {...rest} />
    </div>
  );
}
