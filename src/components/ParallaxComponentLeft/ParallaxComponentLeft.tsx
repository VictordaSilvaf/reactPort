import { Parallax } from 'react-scroll-parallax';

interface SubTitleProps {
    title: string;
}

export function ParallaxComponentLeft({ title, ...restProps }: SubTitleProps) {
    return (
        <Parallax easing="easeOutQuint" speed={5} translateX={[-10, 6]} className="font-semibold text-3xl px-8" >
            <h2 {...restProps}>{title}</h2>
        </Parallax>
    )
}