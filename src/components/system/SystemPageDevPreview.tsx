import { useEffect, useState, type ReactNode } from "react";

import { SystemPage } from "@/components/system/SystemPage";
import {
  systemPages,
  type SystemPageId,
} from "@/data/system-pages";

const pageIds: SystemPageId[] = [
  "401",
  "403",
  "404",
  "500",
  "502",
  "503",
  "504",
  "maintenance",
];

interface SystemPageDevPreviewProps {
  children: ReactNode;
}

function isSystemPageId(value: string | null): value is SystemPageId {
  return value !== null && pageIds.includes(value as SystemPageId);
}

export function SystemPageDevPreview({
  children,
}: SystemPageDevPreviewProps) {
  const [pageId, setPageId] = useState<SystemPageId | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedPage = params.get("system-page");

    if (isSystemPageId(requestedPage)) {
      setPageId(requestedPage);
    }

    setIsReady(true);
  }, []);

  function selectPage(id: SystemPageId) {
    const url = new URL(window.location.href);

    url.searchParams.set("system-page", id);

    window.history.replaceState({}, "", url);

    setPageId(id);
  }

  function returnToPortfolio() {
    const url = new URL(window.location.href);

    url.searchParams.delete("system-page");

    window.history.replaceState({}, "", url);

    setPageId(null);
  }

  if (!isReady) {
    return null;
  }

  if (!pageId) {
    return children;
  }

  return (
    <>
      <div className="fixed left-1/2 top-4 z-[100] flex max-w-[calc(100%-2rem)] -translate-x-1/2 flex-wrap items-center justify-center gap-1 rounded-xl border border-border bg-surface/90 p-1 shadow-lg backdrop-blur-xl">
        {pageIds.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => selectPage(id)}
            className={[
              "rounded-lg px-3 py-2 text-xs font-medium transition-colors",
              pageId === id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            ].join(" ")}
          >
            {id === "maintenance" ? "Manutenção." : id}
          </button>
        ))}

        <button
          type="button"
          onClick={returnToPortfolio}
          className="rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Portfolio
        </button>
      </div>

      <SystemPage {...systemPages[pageId]} />
    </>
  );
}
