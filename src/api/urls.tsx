import { API_URL } from "./settings";

export async function getUrls() {
  const resp = await fetch(API_URL);
  const data = await resp.json();
  return data;
}

export async function createShortedUrl(url: object) {
  const resp = await fetch(API_URL + "/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(url),
  });
  const data = await resp.json();
  return data;
}

export async function visitUrl(id: number) {
  const resp = await fetch(`${API_URL}/visit/${id}`, {
    method: "POST",
  });
  const url = await resp.json();
  return url;
}

export async function deleteUrl(id: number) {
  const resp = await fetch(`${API_URL}/delete/${id}`, {
    method: "Delete",
  });
  const data = await resp.json();
  return data;
}

export async function viewStats(id: number) {
  const resp = await fetch(`${API_URL}/stats/${id}`, {
    method: "GET",
  });
  const data = await resp.json();
  return data;
}
