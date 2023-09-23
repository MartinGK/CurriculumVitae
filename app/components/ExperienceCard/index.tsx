import Card from "../Card";
import HighlightText from "../HighlightText";

type TexperienceCard = {
  title: string;
  description: string;
};

export default function ExperienceCard({
  title,
  description,
}: TexperienceCard) {
  return (
    <Card
      title={
        <HighlightText text={title} />
      }
      content={
        <HighlightText text={description} />
      }
    />
  );
}
