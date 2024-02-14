import ClientComponent from "./clientComponent";

import { heading1, section2 } from "./serverComponent";

const Hero = () => {
  return <ClientComponent section2={section2} heading1={heading1} />;
};

export default Hero;
