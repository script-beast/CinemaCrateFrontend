import React from "react";
import { Card, Typography, Chip, Button, Stack } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { FaPlay } from "react-icons/fa";
import { BiMovie } from "react-icons/bi";

const StandardCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Card variant="standCard">
      <Typography variant="h6" gutterBottom>
        {data.name}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {data.plot}
      </Typography>
      <Stack direction="row" spacing={1} mb={2}>
        <Chip label={data.genre} size="small" color="primary" />
        <Chip label={data.category} size="small" color="secondary" />
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="contained"
          startIcon={<BiMovie />}
          size="small"
          onClick={() => navigate(`/standard/${data._id}`)}
        >
          Veiw Details
        </Button>
        <Button
          variant="outlined"
          startIcon={<FaPlay />}
          size="small"
          onClick={() => window.open(data.trailer, "_blank")}
        >
          Watch Now
        </Button>
      </Stack>
    </Card>
  );
};

export default StandardCard;
