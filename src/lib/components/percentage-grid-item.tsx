import { Grid } from "@raycast/api";
import { PercentageTile } from "./percentage-tile";

type Props = {
  percentage: number;
  title: string;
  subtitle?: string;
};

export const PercentageGridItem: React.FC<Props> = ({ percentage, title, subtitle }) => {
  return <Grid.Item title={title} subtitle={subtitle} content={{ source: PercentageTile({ percentage }) }} />;
};
