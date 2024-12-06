import { Slide } from "react-awesome-reveal";
const SportsJourney = () => {
  const journeySteps = [
    {
      year: "2015",
      title: "Our Beginning",
      description:
        "Started with a passion for sports, we aimed to make premium equipment accessible to everyone.",
    },
    {
      year: "2018",
      title: "Reaching Milestones",
      description:
        "Expanded our catalog to include equipment for 15+ sports and served over 10,000 happy customers.",
    },
    {
      year: "2021",
      title: "Going Global",
      description:
        "Launched our global delivery services, reaching sports enthusiasts worldwide.",
    },
    {
      year: "2024",
      title: "Continuing the Legacy",
      description:
        "Growing every day, we are committed to bringing innovation and quality to sports equipment.",
    },
  ];

  return (
    <div className="bg-base-100 py-10">
      <hr />
      <br />
      <div className="w-11/12 mx-auto">
        <Slide>
          <h1 className="text-3xl font-bold text-center mb-6">
            Our Sports Journey
          </h1>
        </Slide>
        <div className="relative border-l-2 border-gray-300 pl-8">
          {journeySteps.map((step, index) => (
            <div key={index} className="mb-8">
              <div className="absolute -left-4 w-8 h-8 bg-[#766153] rounded-full border-2 border-white"></div>
              <div className="flex flex-col mb-4">
                <h2 className="text-lg font-bold">{step.year}</h2>
                <p className="text-md font-semibold">{step.title}</p>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsJourney;
