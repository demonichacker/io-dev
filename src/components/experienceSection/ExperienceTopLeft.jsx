import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="4" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="5" text="Websites" />
      </div>
      <p className="text-center">
      With four years of experience, I have been creating interactive and intuitive web applications,
       adhering to best practices to deliver top-notch results.
       I have consistently utilized these technologies to develop my portfolio projects.
      </p>
        </div>
  );
};

export default ExperienceTopLeft;
