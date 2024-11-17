import React from "react";
import { useParams } from "react-router-dom";

import { getStandardCrate } from "../../../services";

const Single = () => {
  const { id } = useParams();

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getStandardCrate(id)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return <div>Single</div>;
};

export default Single;
