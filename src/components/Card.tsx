import clsx from "clsx";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

function Card({ icon, title, description, index }: CardProps) {
  return (
    <div
      className={clsx(
        "max-h-84 z-10 flex min-h-fit max-w-screen-lg flex-col items-center justify-between gap-6 rounded-md bg-white px-6 py-8 text-center xl:items-start xl:text-left",
        index === 0 && "xl:self-start",
        index === 1 && "xl:self-center",
        index === 2 && "xl:self-end",
      )}
    >
      <picture className="-mt-[4.75rem] rounded-full bg-dark-violet p-6">
        <img src={icon} alt={title} />
      </picture>
      <h1 className="text-2xl font-bold text-very-dark-violet">{title}</h1>
      <p className="text-base text-grayish-violet">{description}</p>
    </div>
  );
}

export default Card;
