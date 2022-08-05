import Image from "next/image";
import gretta from "../../public/images/gretta.webp";
import raynee from "../../public/images/raynee.webp";

export const MainHero = (): JSX.Element => {
  return (
    <div
      className="h-96 bg-center bg-no-repeat bg-cover flex justify-around items-center"
      style={{ backgroundImage: "url('/images/cheers.webp')" }}
    >
      <Image src={gretta} height="325" width="325" />
      <Image src={raynee} height="325" width="325" />
    </div>
  );
};

export default MainHero;
