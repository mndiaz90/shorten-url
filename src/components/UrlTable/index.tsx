import { Link } from "wouter";
import { deleteUrl, visitUrl } from "../../api/urls";
import "./styles.css";

type Url = {
  original_url: string;
  short_url: string;
  created_at: string;
  id: number;
  clicks: [];
};

type UrlTableProps = {
  urls: Url[];
  getAllUrls: Function;
};

function UrlTable({ urls, getAllUrls }: UrlTableProps) {
  const onVisitUrl = async (id: number) => {
    const { original_url } = await visitUrl(id);

    window.open(original_url, "_blank")?.focus();
  };

  const onDelete = (id: number) => {
    deleteUrl(id).then(() => getAllUrls());
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Short URL</th>
          <th>Original URL</th>
          <th>Created</th>
          <th>Clicks count</th>
          <th>Stats</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url) => {
          return (
            <tr key={url.id}>
              <td>
                <Link href="#" onClick={() => onVisitUrl(url.id)}>
                  {url.short_url}
                </Link>
              </td>
              <td>{url.original_url}</td>
              <td>{url.created_at}</td>
              <td>{url.clicks.length}</td>
              <td>
                <button className="link__button">
                  <Link to={`/stats/${url.id}`}>View</Link>
                </button>
              </td>
              <td>
                <button
                  className="delete__button"
                  onClick={() => onDelete(url.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UrlTable;
