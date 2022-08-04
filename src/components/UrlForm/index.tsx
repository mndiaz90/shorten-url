import { ChangeEvent, useState } from "react";
import { createShortedUrl } from "../../api/urls";
import isValidURL from "../../utils/validateUrl";
import "./styles.css";

interface UrlFormProps {
  getAllUrls: Function;
}

const UrlForm = ({ getAllUrls }: UrlFormProps) => {
  const [inputUrl, setInputUrl] = useState<string>("");
  const [invalidUrlMsg, setInvalidUrlMsg] = useState<string>("");

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!inputUrl) return;

    if (!isValidURL(inputUrl)) return setInvalidUrlMsg("Invalid URL");

    setInvalidUrlMsg("");
    createShortedUrl({ original_url: inputUrl }).then(() => getAllUrls());
    setInputUrl("");
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value);
    if (event.target.value === "") setInvalidUrlMsg("");
  };

  return (
    <form onSubmit={onSubmit} className="form-shorten">
      <input
        className="form-shorten__input"
        type="text"
        placeholder="Your original URL here: Ex: https://www.google.com"
        value={inputUrl}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChangeInput(event)
        }
      />
      <button className="form-shorten__button">SHORTEN URL</button>
      <span style={{ color: "red" }}>{invalidUrlMsg}</span>
    </form>
  );
};

export default UrlForm;
