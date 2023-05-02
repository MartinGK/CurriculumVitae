import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HighlightText from "components/HighlightText";

type TexperienceCard = {
  title: string;
  description: string;
};

export default function ExperienceCard({
  title,
  description,
}: TexperienceCard) {
  return (
    <Card sx={{ minWidth: 275 }} className="!bg-white !bg-opacity-10 md:h-[22rem] md:min-w-24">
      <CardContent>
        <Typography variant="h5" component="div" className="font-bold md:text-2xl md:min-h-[4rem]">
          <HighlightText text={title} />
        </Typography>
        <Typography variant="body2" className="pt-2 md:text-xl">
          <HighlightText text={description} />
        </Typography>
      </CardContent>
    </Card>
  );
}
