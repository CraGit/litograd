"use client";

import { useEffect, useState } from "react";

export function ClientPrismicPreview() {
  const [PrismicPreviewComponent, setPrismicPreviewComponent] = useState(null);
  const [repositoryName, setRepositoryName] = useState(null);

  useEffect(() => {
    // Only load PrismicPreview on the client side
    const loadPrismicPreview = async () => {
      try {
        const { PrismicPreview } = await import("@prismicio/next");
        const { repositoryName: repoName } = await import("@/prismicio");

        setPrismicPreviewComponent(() => PrismicPreview);
        setRepositoryName(repoName);
      } catch (error) {
        console.log("PrismicPreview not available:", error);
      }
    };

    // Only load in browser environment
    if (typeof window !== "undefined") {
      loadPrismicPreview();
    }
  }, []);

  // Only render if we have both the component and repository name
  if (!PrismicPreviewComponent || !repositoryName) {
    return null;
  }

  return <PrismicPreviewComponent repositoryName={repositoryName} />;
}
