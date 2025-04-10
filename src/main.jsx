import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {Auth0Provider} from '@auth0/auth0-react'
import { ValueProvider } from "./Context/ValueProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
 
   <Auth0Provider
    domain="dev-wkqmchj3xikks4z7.us.auth0.com"
    clientId="uSWLnkzqP2vJVY0EbSfuiwWOQnwY15NH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <ValueProvider>
    <App />
    </ValueProvider>
  </Auth0Provider>,
  </BrowserRouter>
);
