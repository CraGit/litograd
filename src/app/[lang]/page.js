import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { reverseLocaleLookup } from "@/i18n";
import { createClient } from "@/prismicio";

import { Layout } from "@/components/Layout";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const client = createClient();
  const page = await client.getByUID("page", "home", { lang });

  return {
    title: page.data.meta_title || prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || prismic.asText(page.data.title),
      description: page.data.meta_description,
      images: page.data.meta_image?.url ? [page.data.meta_image.url] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.meta_title || prismic.asText(page.data.title),
      description: page.data.meta_description,
      images: page.data.meta_image?.url ? [page.data.meta_image.url] : [],
    },
  };
}

export default async function Page({ params }) {
  try {
    const { lang } = await params;
    const client = createClient();

    const page = await client.getByUID("page", "home", {
      lang: reverseLocaleLookup(lang),
    });
    const navigation = await client.getSingle("navigation", {
      lang: reverseLocaleLookup(lang),
    });
    const settings = await client.getSingle("settings", {
      lang: reverseLocaleLookup(lang),
    });

    const locales = await getLocales(page, client);

    console.log("Page: Locales data:", locales);

    return (
      <Layout locales={locales} navigation={navigation} settings={settings}>
        <SliceZone slices={page.data.slices} components={components} />
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

  const pages = await client.getAllByType("page", {
    lang: "*",
    filters: [prismic.filter.at("my.page.uid", "home")],
  });

  return pages.map((page) => {
    return {
      lang: page.lang,
    };
  });
}
