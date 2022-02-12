import { Navi } from "./NaviTop";
import { VictoryAxis, VictoryChart, VictoryLine } from "victory";
import { Grid } from "@mui/material";

export const EuRozpocet = () => {
  return (
    <div>
      <Navi />
      <Grid xs={12} md={4} container style={{ marginTop: 100 }}>
        <VictoryChart
          animate={{ duration: 3000, easing: "polyInOut" }}
          padding={65}
        >
          <VictoryLine
            interpolation="linear"
            style={{
              data: { stroke: "#c43a31", strokeWidth: 3 },
              parent: { border: "3px solid #ccc" },
            }}
            data={EUData}
          />
        </VictoryChart>
      </Grid>
    </div>
  );
};

// https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=env_ac_tax&lang=en
const EUData = [
  { x: new Date(2011, 1, 1), y: 272354 },
  { x: new Date(2012, 1, 1), y: 278460 },
  { x: new Date(2013, 1, 1), y: 284142 },
  { x: new Date(2014, 1, 1), y: 290986 },
  { x: new Date(2015, 1, 1), y: 298974 },
  { x: new Date(2016, 1, 1), y: 310199 },
  { x: new Date(2017, 1, 1), y: 316588 },
  { x: new Date(2018, 1, 1), y: 324705 },
  { x: new Date(2019, 1, 1), y: 329814 },
  { x: new Date(2020, 1, 1), y: 299884 },
];
