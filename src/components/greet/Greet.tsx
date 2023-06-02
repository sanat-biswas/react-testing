import { Props } from "./greet.types";

const Greet = (props: Props) => {
  return <h1>Hello {props?.name ?? "Guest"}</h1>;
};

export default Greet;
