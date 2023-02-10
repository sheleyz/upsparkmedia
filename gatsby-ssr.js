import * as React from "react";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
    setHtmlAttributes({ lang: "en-US" });
    setHeadComponents([<link rel="preload" href="/fonts/Asap/Asap-VariableFont_wght.ttf" as="font" type="font/ttf" crossOrigin="anonymous" key="asapFont" />]);
};
