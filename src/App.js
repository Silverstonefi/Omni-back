import React from "react";
import Pages from "./component/home/pages/Pages";
import Translate from "./component/locales/Translate";

function App() {
  const currentLanguage = Translate();
  console.log("Current Language:", currentLanguage); // Example of using the current language

  return (
    <>
      <Pages />
    </>
  );
}

export default App;
