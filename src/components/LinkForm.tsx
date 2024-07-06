import clsx from "clsx";
import { FormEvent, useEffect, useState } from "react";
import getShortenedLink from "../lib/api";
import Links from "./Links";

export interface LinksProps {
  originalLink: string;
  shortLink: string;
}

function LinkForm() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [links, setLinks] = useState<LinksProps[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    const urlRegex =
      /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    const isValidUrl = urlRegex.test(url);

    if (url.trim() !== "" && isValidUrl) {
      const shortLink = await getShortenedLink(url);
      const data = { originalLink: url, shortLink };

      if (shortLink) {
        saveLinksInLocalStorage(data);
        setLoading(false);
      }

      setUrl("");
    } else {
      setLoading(false);
      if (!isValidUrl && url !== "") setError("Invalid URL.");
      else setError("Please add a link");
    }
  }

  function saveLinksInLocalStorage(link: LinksProps) {
    const saveLinks = localStorage.getItem("links");
    const linksArray: LinksProps[] = saveLinks ? JSON.parse(saveLinks) : [];

    linksArray.push(link);
    localStorage.setItem("links", JSON.stringify(linksArray));
    setLinks(linksArray);
  }

  useEffect(() => {
    const saveLinks = localStorage.getItem("links");
    if (saveLinks) {
      setLinks(JSON.parse(saveLinks));
    }
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="md:bg-desktop mx-auto -mt-[15.125rem] mb-12 flex w-full max-w-screen-xl flex-col gap-6 rounded-xl bg-dark-violet bg-shorten-mobile bg-auto bg-right-top bg-no-repeat p-6 md:-mt-[13.5rem] md:flex-row md:items-start md:bg-shorten-desktop md:p-8"
      >
        <div className="h-min flex-1">
          <input
            type="text"
            name="url"
            id="url"
            className={clsx(
              "w-full rounded p-3",
              error && "mb-1 shadow-[inset_0_0_0_4px_hsl(0,_87%,_67%)]",
            )}
            placeholder="Shorten a link here..."
            onFocus={() => setError("")}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          {error && <span className="text-sm italic text-red">{error}</span>}
        </div>
        <button
          className={clsx(
            "get-started-button w-full rounded px-0 md:w-fit md:px-8",
            loading && "animate-pulse",
          )}
          type="submit"
        >
          Shorten It!
        </button>
      </form>
      <div className="-mt-6 mb-12 flex max-h-96 flex-col gap-y-6 overflow-y-auto">
        {links.map((link, index) => (
          <Links
            key={index}
            originalLink={link.originalLink}
            shortLink={link.shortLink}
          />
        ))}
      </div>
    </>
  );
}

export default LinkForm;
