import UrlForm from "../../components/UrlForm";
import UrlTable from "../../components/UrlTable";
import useUrl from "../../hooks/useUrl";

function Home() {
  const { urls, getAllUrls, loading } = useUrl();

  return (
    <main>
      <h2>Create a new short URL</h2>
      <UrlForm getAllUrls={getAllUrls} />
      {loading ? "Loading" : <UrlTable urls={urls} getAllUrls={getAllUrls} />}
    </main>
  );
}

export default Home;
