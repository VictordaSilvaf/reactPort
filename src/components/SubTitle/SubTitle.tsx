interface SubTitleProps {
  title: string;
}

export function SubTitle({ title }: SubTitleProps) {
  return (
    <div className="flex justify-center">
      <h1 className="font-semibold text-5xl mb-6 text-center text-greenx-500">
        {title}
      </h1>
    </div>
  );
}
