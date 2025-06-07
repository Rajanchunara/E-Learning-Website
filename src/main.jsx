import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { CartProvider } from "./Context/CartContext/CartProvider.jsx";
import { Bounce, ToastContainer } from 'react-toastify';
import { AuthProvider } from "./Context/AuthProvider.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthProvider>
  <CartProvider>
    <Auth0Provider
      domain="dev-wkqmchj3xikks4z7.us.auth0.com"
      clientId="uSWLnkzqP2vJVY0EbSfuiwWOQnwY15NH"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />




    </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
