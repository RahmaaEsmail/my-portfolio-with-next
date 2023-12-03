import { experiences } from "@/public/data/experience";

function ExperienceList() {
  return (
    <>
      {experiences.map((experience, index) => {
        return (
          <p key={experience.id}>
            {index + 1}&#41; {experience.experience}, {experience.type},{" "}
            {experience.date}
          </p>
        );
      })}
    </>
  );
}

export default ExperienceList;
