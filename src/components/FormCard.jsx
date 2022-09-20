import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function FormCard({ data }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {Date(data.date)}
        </Typography>
        <Typography variant="h5" component="div">
          {data.firstName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.maritalStatus}
        </Typography>
        <Typography variant="body2">
          {data.email}
          <br />
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{data.lastName}</Button>
      </CardActions>
    </Card>
  );
}
