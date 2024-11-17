import React from "react";
import { Grid } from "@mui/material";
import { StandardCard } from "../../../components/ui";
import { getStandardCrates } from "../../../services";
import { myToast } from "../../../utils";

const List = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const loadData = () => {
    setLoading(false);
    getStandardCrates({ limit: 10, page: 1 })
      .then((response) => {
        setData(response.result);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <Grid container spacing={3}>
      {data.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
          <StandardCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
