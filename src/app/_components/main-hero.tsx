import Image from "next/image";

export const MainHero = (): JSX.Element => {
  return (
    <div
      className="flex h-96 items-center justify-around bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/cheers.webp')" }}
    >
      <Image
        src="/images/gretta.webp"
        height="325"
        width="325"
        alt="caracature of a woman with shoulder length blond hair, wearing a blue shirt, and glasses"
      />
      <Image
        src="/images/raynee.webp"
        height="325"
        width="325"
        alt="caracature of a woman with shoulder length blond hair, wearing a blue shirt, and glasses"
      />
    </div>
  );
};

export default MainHero;
