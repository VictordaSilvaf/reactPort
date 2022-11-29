import { Footer } from "../components";
import { Menu } from "../components/Menu/Menu";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Menu />

      <div id="content" className="px-6 py-4 min-h-full">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className="h-[1000px] w-80"></div>
      </div>

      <Footer />
    </div>
  );
}