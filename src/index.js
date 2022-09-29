
import { createRoot } from "react-dom/client";
import {ChakraProvider} from "@chakra-ui/react"
import App from "./App";
import {BrowserRouter} from"react-router-dom" 
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ChakraProvider>
<BrowserRouter>
    <App />
    </BrowserRouter>
  </ChakraProvider>
);
