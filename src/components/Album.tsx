import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navi } from "./NaviTop";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../helpers/routing";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright © Raffaele Badura {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export const Album = () => {
  let navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navi />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 7,
            pb: 4,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Ekologie jako politická agenda
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              paragraph
            >
              S přibývajícím rizikem, které představuje klimatická změna, roste
              nutnost politické odezvy. Tato stránka odhaluje, jak se EU a
              jednotlivé členské země staví k ekologickým výzvám .
            </Typography>
            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={0}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cardArray.map((card) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  key={card.Heading}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      mt: "13%",
                      height: 200,
                    }}
                    image={card.imgSrc}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.Heading}
                    </Typography>
                    <Typography variant="subtitle2">{card.text}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      style={{ width: "100%" }}
                      size="large"
                      onClick={() => {
                        navigate(card.linkTo);
                      }}
                    >
                      Zobrazit více
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", pt: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

const cardArray = [
  {
    Heading: "Ekologie a rozpočet EU",
    imgSrc:
      "https://www.politico.eu/wp-content/uploads/2019/06/iStock-1134792153.jpg",
    text: "V posledních letech se postupně zvyšuje částka, kterou se EU snaží podpořit přechod k zeleným zdrojům energie.",
    linkTo: routes.ROUTE_EUCELKROZPOCET,
  },
  {
    Heading: "Ekologie a rozpočty členských států",
    imgSrc:
      "https://yourmoneygeek.com/wp-content/uploads/2021/03/Stock-Charts.png.webp",
    text: "S klimatickou změnou se potýkají i členské státy jednotlivě. Částky, které alokují na boj s ekologickými hrozbami, se ovšem liší.",
    linkTo: routes.ROUTE_EUCLENROZPOCET,
  },
  {
    Heading: "Evropa a klimatické problémy",
    //this picture is from nasa!
    imgSrc:
      "https://climate.nasa.gov/system/internal_resources/details/original/103_shutterstock_88550854-740px.jpg",
    text: "Evropa jako kontinent stojí tvaří v tvář klimatickým změnám. Zvedání hladiny moře ohrožuje přímořské státy.",
    linkTo: routes.ROUTE_EUCELKPROBLEMY,
  },
];
