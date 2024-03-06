import { useState } from "react";
import iconCat from "../../assets/flag_10600730.png";
import i18n from "../../i18n";

const Languages = () => {
  const [lang, setLang] = useState(i18n.language);

  return (
    <div className="w-full sm:w-3/4 lg:w-2/5 mx-auto p-6 text-end pe-0">
      <button
        onClick={() => {
          i18n.changeLanguage("en");
          setLang("en");
        }}
      >
        <img
          data-testid="enImg"
          width="48"
          height="48"
          className={`inline-block hover:bg-[#ED755D] hover:bg-opacity-40 rounded-full border-0 ${
            lang === "en" ? "bg-[#ED755D] bg-opacity-40" : "bg-transparent"
          }`}
          src="https://img.icons8.com/color/48/great-britain-circular.png"
          alt="great-britain-circular"
        />
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("es");
          setLang("es");
        }}
      >
        <img
          data-testid="esImg"
          width="48"
          height="48"
          className={`inline-block mx-3 hover:bg-[#ED755D] hover:bg-opacity-40 rounded-full border-0 ${
            lang === "es" ? "bg-[#ED755D] bg-opacity-40" : "bg-transparent"
          }`}
          src="https://img.icons8.com/color/48/spain-circular.png"
          alt="spain-circular"
        />
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("cat");
          setLang("cat");
        }}
      >
        <img
          data-testid="catImg"
          src={iconCat}
          alt="catalonia-circular"
          className={`inline-block hover:bg-[#ED755D] hover:bg-opacity-40 rounded-full border-0 ${
            lang === "cat" ? "bg-[#ED755D] bg-opacity-40" : "bg-transparent"
          }`}
          style={{ width: "48px", height: "48px", padding: "3px" }}
        />
      </button>
    </div>
  );
};

export default Languages;
