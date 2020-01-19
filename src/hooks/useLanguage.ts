import { useState } from "react";

function useLanguage() {
  const [language, setLanguage] = useState();

  return [language, setLanguage];
}

export default useLanguage;
