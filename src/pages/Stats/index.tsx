import { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "wouter";
import { viewStats } from "../../api/urls";

type Stat = {
  created_at: string;
  count: number;
};

type StatsProps = {
  id: string;
};

function Stats({ params }: RouteComponentProps<StatsProps>) {
  const [stats, setStats] = useState<Array<Stat>>([]);

  useEffect(() => {
    viewStats(Number(params.id)).then((data) => setStats(data));
  }, [params.id]);

  return (
    <div>
      <h3>Stats</h3>
      <table style={{ marginBottom: "3rem" }}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Clicks per day</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat: Stat, index) => {
            return (
              <tr key={index}>
                <td>{stat.created_at}</td>
                <td>{stat.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link href="/">
        <button>Back home</button>
      </Link>
    </div>
  );
}

export default Stats;
