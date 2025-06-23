import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { notFound } from "next/navigation";

import { getLocales } from "@/lib/getLocales";
import { reverseLocaleLookup } from "@/i18n";
import { createClient } from "@/prismicio";

import { Layout } from "@/components/Layout";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
  const { uid, lang } = await params;
  const client = createClient();

  // Try to get as project first, then as page
  let document;

  try {
    document = await client.getByUID("project", uid, { lang });
  } catch {
    try {
      document = await client.getByUID("page", uid, { lang });
    } catch {
      return {
        title: "Page Not Found",
        description: "The requested page could not be found",
      };
    }
  }

  return {
    title: document.data.meta_title || prismic.asText(document.data.title),
    description: document.data.meta_description,
    openGraph: {
      title: document.data.meta_title || prismic.asText(document.data.title),
      description: document.data.meta_description,
      images: document.data.meta_image?.url
        ? [document.data.meta_image.url]
        : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: document.data.meta_title || prismic.asText(document.data.title),
      description: document.data.meta_description,
      images: document.data.meta_image?.url
        ? [document.data.meta_image.url]
        : [],
    },
  };
}

export default async function Page({ params }) {
  try {
    const { uid, lang } = await params;

    // Skip common browser requests that aren't pages
    if (
      uid === "favicon.ico" ||
      uid === "robots.txt" ||
      uid === "sitemap.xml"
    ) {
      notFound();
    }

    const client = createClient();

    // Try to get as project first, then as page
    let document;

    try {
      document = await client.getByUID("project", uid, {
        lang: reverseLocaleLookup(lang),
      });
    } catch {
      try {
        document = await client.getByUID("page", uid, {
          lang: reverseLocaleLookup(lang),
        });
      } catch {
        notFound();
      }
    }

    const navigation = await client.getSingle("navigation", {
      lang: reverseLocaleLookup(lang),
    });
    const settings = await client.getSingle("settings", {
      lang: reverseLocaleLookup(lang),
    });

    const locales = await getLocales(document, client);

    console.log("Page: Locales data:", locales);
    console.log("Document type:", document.type);

    return (
      <Layout locales={locales} navigation={navigation} settings={settings}>
        <SliceZone
          slices={document.data.slices}
          components={components}
          context={{
            settings,
          }}
        />
      </Layout>
    );
  } catch (error) {
    console.error("Page: Error loading page data:", error);
    // You might want to show an error page or fallback content
    throw error;
  }
}

export async function generateStaticParams() {
  const client = createClient();

  // Get both pages and projects
  const pages = await client.getAllByType("page", {
    lang: "*",
    filters: [prismic.filter.not("my.page.uid", "home")],
  });

  let projects = [];
  try {
    projects = await client.getAllByType("project", {
      lang: "*",
    });
  } catch (error) {
    console.log("No projects found or project type doesn't exist yet");
  }

  const allDocuments = [...pages, ...projects];

  return allDocuments.map((doc) => {
    return {
      uid: doc.uid,
      lang: doc.lang,
    };
  });
}
