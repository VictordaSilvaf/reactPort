import { Parallax } from "react-scroll-parallax";

interface SubTitleProps {
  menssage: string;
  image: string;
  orientation: any;
  reverse: boolean;
  title: string;
  padding: boolean;
}

export function ParallaxComponentLeft({
  menssage,
  image,
  orientation,
  reverse,
  title,
  padding,
  ...restProps
}: SubTitleProps) {
  return (
    <div className="grid grid-cols-2 mt-10 h-full ">
      <Parallax
        speed={5}
        translateX={orientation[0]}
        className="col-span-2 sm:col-span-1 flex justify-center order-3 z-0"
      >
        <img src={image} alt="" className="h-full rounded-3xl"></img>
      </Parallax>
      <Parallax
        speed={5}
        translateX={orientation[1]}
        className={`col-span-2 sm:col-span-1 flex h-full w-full justify-center text-center font-thin text-lg items-center flex-col px-16 -z-10 ${
          padding ? "pb-28" : ""
        } `}
      >
        <h2 className="text-3xl mb-3">{title}</h2>
        <p className="">{menssage}</p>
      </Parallax>
    </div>
  );
}
