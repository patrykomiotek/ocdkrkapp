// type Color = "emerald" | "carrot";

const colors = {
  emerald: "#2ecc71",
  carrot: "#e67e22",
  clouds: "#ecf0f1",
  "midnight-blue": "#2c3e50",
  "peter-river": "#3498db",
};

type Color = keyof typeof colors;

type Props = Readonly<{
  label: string;
  color?: Color;
  bgColor?: Color;
}>;

// emerald: '#2ecc71',
// carrot: '#e67e22',
// clouds: '#ecf0f1',
// 'midnight-blue': '#2c3e50',
// 'peter-river': '#3498db',

export const Button = ({
  label,
  color = "clouds",
  bgColor = "midnight-blue",
}: Props) => {
  // const myColor = props.color ? props.color : "#fff";
  // const myColor = props.color ?? '#fff';
  // const myColor = props.color || '#fff';

  // color = "carrot";

  const styles = {
    color: colors[color],
    backgroundColor: colors[bgColor],
  };
  return <button style={styles}>{label}</button>;
};

/**
 * <Button label="Click me" />
 * <Button label="Click me" color="clouds" />
 * <Button label="Click me" color="clouds" bgColor="midnight-blue" />
 */
