import { experiences } from "@constants";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
          {title}
        </Typography>
        <Typography variant="body2" className="pt-2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
