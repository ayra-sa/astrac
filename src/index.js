import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import Cookies from 'js-cookie'

i18next
    .use(initReactI18next)
    .use(HttpApi)
    .init({
      supportedLngs: ["en", "ja"],
      fallbackLng: "en",
      lng: Cookies.get('locale') || 'en',
      detection: {
        order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
        caches: ["cookie"],
      },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
      },
      react: { useSuspense: false },
    });

    const loading = (
      // <div className="spinner-border" role="status">
      //   <span className="visually-hidden">Loading...</span>
      // </div>
      <span>loading...</span>
    )

ReactDOM.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
