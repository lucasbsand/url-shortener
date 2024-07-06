import Illustration from "/images/illustration-working.svg";

function Introduction() {
  return (
    <section className="mx-auto flex flex-col gap-y-8 pb-32 md:max-w-screen-xl md:flex-row-reverse md:items-center">
      <picture className="block min-w-[130vw] md:h-fit md:w-1/2 md:min-w-0 xl:overflow-visible">
        <img
          className="ml-6 h-auto w-auto md:ml-0 md:min-w-[140%]"
          src={Illustration}
          alt="Illustration Working"
        />
      </picture>
      <article className="flex flex-col items-center gap-y-4 px-6 text-center md:w-1/2 md:items-start md:gap-0 md:text-left">
        <h1 className="text-4xl font-bold text-very-dark-violet md:text-5xl md:leading-[1.1] lg:text-6xl lg:leading-[1.2] xl:text-7xl">
          More than just shorter links
        </h1>
        <p className="text-grayish-violet md:mb-6 md:max-w-[90%] lg:text-lg">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="get-started-button rounded-full">Get Started</button>
      </article>
    </section>
  );
}

export default Introduction;
