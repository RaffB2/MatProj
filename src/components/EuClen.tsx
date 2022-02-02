import { Grid, Typography, Box } from "@mui/material";
import { useState } from "react";
import { EUMap } from "./map/EuMap";
import { Navi } from "./NaviTop";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { EuCountriesData } from "../helpers/EuCountriesData";

export const EuClen = () => {
  const [selectedCountry, setSelectedCountry] = useState();
  return (
    <div>
      <Navi />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid xs={8} lg={8} md={8}>
          <div style={{ marginTop: 100 }}>
            <EUMap
              setSelectedCountry={setSelectedCountry}
              selectedCountry={selectedCountry}
            />
          </div>
        </Grid>
        <Grid xs={8} lg={4} md={5} alignItems="center">
          <DataTable identifier={selectedCountry} />
        </Grid>
      </Grid>
    </div>
  );
};


//TODO: Refactor to components and add real data
//TODO: Improve visuals
//TODO: Figure more data points

const DataTable = ({ identifier }: { identifier: undefined | string }) => {
  if (identifier === undefined) {
    return null;
  }
  return (
    <div style={{ height: 500 }}>
      <Typography variant="h2" sx={{ marginBottom: 2 }}>
        {EuCountriesData[`${identifier}`].name}
      </Typography>

      <Grid container direction="row" sx={{ marginBottom: 1 }}>
        <ArrowUpwardIcon
          sx={{ alignSelf: "center", marginRight: 1, fill: "green" }}
          fontSize="large"
        />
        <Typography sx={{ alignSelf: "flex-end", marginRight: 1 }} variant="h5">
          HDP:
        </Typography>
        <Typography variant="h4">500</Typography>
        <Typography sx={{ alignSelf: "flex-end", marginLeft: 1 }} variant="h5">
          Miliard €
        </Typography>
      </Grid>

      <Grid container direction="row" sx={{ marginBottom: 1 }}>
        <ArrowUpwardIcon
          sx={{ alignSelf: "center", marginRight: 1, fill: "green" }}
          fontSize="large"
        />
        <Typography sx={{ alignSelf: "flex-end", marginRight: 1 }} variant="h5">
          Emise:
        </Typography>
        <Typography variant="h4">100</Typography>
        <Typography sx={{ alignSelf: "flex-end", marginLeft: 1 }} variant="h5">
          CO2
        </Typography>
      </Grid>

      <Grid container direction="row" sx={{ marginBottom: 1 }}>
        <ArrowUpwardIcon
          sx={{ alignSelf: "center", marginRight: 1, fill: "green" }}
          fontSize="large"
        />
        <Typography sx={{ alignSelf: "flex-end", marginRight: 1 }} variant="h5">
          Investice za rok X:
        </Typography>
        <Typography variant="h4">100</Typography>
        <Typography sx={{ alignSelf: "flex-end", marginLeft: 1 }} variant="h5">
          Miliard €
        </Typography>
      </Grid>

      <Grid container direction="row" sx={{ marginBottom: 1 }}>
        <ArrowUpwardIcon
          sx={{ alignSelf: "center", marginRight: 1, fill: "green" }}
          fontSize="large"
        />
        <Typography sx={{ alignSelf: "flex-end", marginRight: 1 }} variant="h5">
          Populace:
        </Typography>
        <Typography variant="h4">1000</Typography>
      </Grid>

      <Grid container direction="row">
        <ArrowDownwardIcon
          sx={{ alignSelf: "flex-end", marginRight: 1, fill: "red" }}
          fontSize="large"
        />
        <Typography variant="h5" sx={{ alignSelf: "flex-end", marginRight: 1 }}>
          Procent z HDP:
        </Typography>
        <Typography variant="h4">9000</Typography>
        <Typography sx={{ alignSelf: "flex-end" }} variant="h5">
          %
        </Typography>
      </Grid>
    </div>
  );
};
