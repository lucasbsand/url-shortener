import { useState } from "react";
import clsx from "clsx";

import { LinksProps } from "./LinkForm";

function Links({ originalLink, shortLink }: LinksProps) {
  const [copied, setCopied] = useState(false);

  function handleCopyLink() {
    navigator.clipboard.writeText(shortLink);
    setCopied(true);
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col rounded bg-white p-4 lg:flex-row lg:items-center lg:justify-between lg:gap-x-12">
        <a
          href={originalLink}
          className="w-full overflow-x-hidden text-ellipsis text-nowrap border-b border-b-light-gray pb-4 font-bold text-very-dark-blue lg:border-0 lg:pb-0"
        >
          {originalLink}
        </a>
        <div className="flex flex-col lg:w-max lg:flex-row lg:gap-x-8">
          <a
            href={shortLink}
            className="overflow-x-hidden text-ellipsis text-nowrap py-4 text-cyan"
          >
            {shortLink}
          </a>
          <button
            onClick={handleCopyLink}
            className={clsx(
              "rounded bg-cyan py-2 text-white transition active:brightness-110 lg:w-28",
              copied && "bg-dark-violet",
            )}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Links;
