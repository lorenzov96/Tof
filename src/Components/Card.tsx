import React from "react";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export function OneCard() {
  return (
    <React.Fragment>
      <Card
        style={{
          width: "22%",
          height: "300px",
          marginBottom: "16px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* <div
        style={{
          width: "22%",
          height: "300px",
          backgroundColor: "lightgray",
          marginBottom: "16px",
        }}
      >
        <h3 style={{ padding: "16px" }}>{"title"}</h3>
        <p style={{ padding: "16px" }}>{"description"}</p>
      </div> */}
    </React.Fragment>
  );
}
