async function getShortenedLink(url: string) {
  const API_KEY =
    "SjpQhiuTrDFn2RWFWzdMOKiUOBTh4M0kqXQ6mnAs8tSnpLzBr9PnYv1KC7vU";
  const endpoint = "https://api.tinyurl.com/create";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ url: url }),
    });

    if (!res.ok) console.error("Request error.");

    const data = await res.json();
    return data.data.tiny_url;
  } catch (error) {
    console.error(error);
  }
}

export default getShortenedLink;
