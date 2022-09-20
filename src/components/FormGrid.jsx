import Grid from "@mui/material/Grid";
import { FormCard } from "./";

export default function FormGrid({ data }) {
  return (
    <Grid container spacing={1} px={2}>
      {data?.map((data, key) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
            <FormCard data={data} />
          </Grid>
        );
      })}
    </Grid>
  );
}
