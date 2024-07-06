import CardsContainer from "./CardsContainer";
import LinkForm from "./LinkForm";

function ShortSection() {
  return (
    <section className="relative bg-light-gray px-6 pb-24 pt-40">
      <LinkForm />
      <article className="mx-auto mb-20 max-w-lg text-center">
        <h2 className="mb-6 text-2xl font-bold text-very-dark-violet">
          Advenced Statistics
        </h2>
        <p className="leading-loose text-grayish-violet">
          Track how your links are performing across the web with our advenced
          statics dashboard.
        </p>
      </article>
      <CardsContainer />
    </section>
  );
}

export default ShortSection;
