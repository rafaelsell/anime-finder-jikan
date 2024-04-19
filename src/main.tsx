import ReactDOM from "react-dom/client";
import { Layout } from "./Layout";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </QueryClientProvider>
  </ChakraProvider>
);
