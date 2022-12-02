import { Parallax } from 'react-scroll-parallax';

interface SubTitleProps {
    menssage: string;
    image: string;
    orientation: any;
    reverse: boolean;
}

export function ParallaxComponentLeft({ menssage, image, orientation, reverse, ...restProps }: SubTitleProps) {
    return (
        <div className="grid grid-cols-2 h-auto mt-10">
            <Parallax
                speed={5}
                translateX={orientation[0]}
                className="flex justify-center order-3 z-0"
            >
                <img src={image} alt="" className="h-[500px]"></img>
            </Parallax>
            <Parallax
                speed={5}
                translateX={orientation[1]}
                className="flex justify-center text-center font-thin text-lg items-center flex-col px-16 -z-10"
            >
                <p className="">
                    {menssage}
                </p>
            </Parallax>
        </div>
    )
}