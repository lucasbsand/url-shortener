async function getShortenedLink(url: string) {
  const endpoint = import.meta.env.VITE_ENDPOINT;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ url: url }),
    });

    if (!res.ok) console.error("Request error.");
    const data = await res.json();
    return data.shortenedUrl;
  } catch (error) {
    console.error(error);
  }
}

export default getShortenedLink;