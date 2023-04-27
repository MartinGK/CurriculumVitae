import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HighlightText from "components/HighlightText";

type TExperienceCard = {
  title: string;
  description: string;
};

export default function ExperienceCard({
  title,
  description,
}: TExperienceCard) {
  return (
    <Card sx={{ minWidth: 275 }} className="bg-white bg-opacity-10">
      <CardContent>
        <Typography variant="h5" component="div" className="font-bold">
          <HighlightText text={title} />
        </Typography>
        <Typography variant="body2" className="pt-2">
          <HighlightText text={description} />
        </Typography>
      </CardContent>
    </Card>
  );
}
