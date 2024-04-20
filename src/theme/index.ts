import { extendTheme } from "@chakra-ui/react";

import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FEDE95",
      200: "#0E0E11",
    },
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      body: {
        heading: `'Montserrat', sans-serif`,
        fontFamily: `'Montserrat', sans-serif`,
      },
    },
  },
});
