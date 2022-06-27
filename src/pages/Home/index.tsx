import { ChangeEvent, useState } from "react";
import { createShortedUrl } from "../../api/urls";
import UrlTable from "../../components/UrlTable";
import useUrl from "../../hooks/useUrl";
import isValidURL from "../../utils/validateUrl";

function Home() {
  const { urls, getAllUrls, loading } = useUrl();
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

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) =>
    setInputUrl(event.target.value);
  return (
    <main>
      <form onSubmit={onSubmit}>
        <h2>Create a new short URL</h2>
        <input
          type="text"
          placeholder="Your original URL here: Ex: https://www.google.com"
          value={inputUrl}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeInput(event)
          }
        />
        <button>SHORTEN URL</button>
      </form>
      <span style={{ color: "red" }}>{invalidUrlMsg}</span>
      {loading ? "Loading" : <UrlTable urls={urls} getAllUrls={getAllUrls} />}
    </main>
  );
}

export default Home;
