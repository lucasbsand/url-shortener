import Card from "./Card";

function CardsContainer() {
  const contents = [
    {
      icon: "/images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      icon: "/images/icon-detailed-records.svg",
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      icon: "/images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <div className="relative mx-auto flex max-w-screen-xl flex-col items-center gap-20 before:absolute before:z-0 before:h-full before:w-2 before:bg-cyan xl:h-[22.25rem] xl:flex-row xl:before:h-2 xl:before:w-full">
      {contents.map((content, i) => (
        <Card
          key={content.title}
          icon={content.icon}
          title={content.title}
          description={content.description}
          index={i}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
