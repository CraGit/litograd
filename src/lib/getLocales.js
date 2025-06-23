/**
 * Returns an array of document metadata containing each locale available in the repository.
 * If a document has translations, it returns those; otherwise it provides fallback entries
 * for all repository languages to enable language switching.
 *
 * A `lang_name` property is included in each document containing the document's
 * locale name as it is configured in the Prismic repository.
 *
 * @param {import("@prismicio/types").PrismicDocument} doc
 * @param {import("@prismicio/client").Client} client
 *
 * @returns {Promise<(import("@prismicio/types").PrismicDocument & { lang_name: string })[]>}
 */
export async function getLocales(doc, client) {
  try {
    // Validate inputs
    if (!doc) {
      console.error("getLocales: doc parameter is required");
      return [];
    }

    if (!client) {
      console.error("getLocales: client parameter is required");
      return [];
    }

    const [repository, altDocs] = await Promise.all([
      client.getRepository().catch((error) => {
        console.error("getLocales: Failed to get repository:", error);
        throw error;
      }),
      doc.alternate_languages && doc.alternate_languages.length > 0
        ? client
            .getAllByIDs(
              doc.alternate_languages.map((altLang) => altLang.id),
              {
                lang: "*",
                // Exclude all fields to speed up the query.
                fetch: `${doc.type}.__nonexistent-field__`,
              }
            )
            .catch((error) => {
              console.error(
                "getLocales: Failed to get alternate documents:",
                error
              );
              // Return empty array on error instead of failing completely
              return [];
            })
        : Promise.resolve([]),
    ]);

    const allDocs = [doc, ...altDocs];

    // If we have alternate language versions, return them
    if (altDocs.length > 0) {
      return allDocs.map((currentDoc) => {
        const language = repository.languages.find(
          (lang) => lang.id === currentDoc.lang
        );

        if (!language) {
          console.warn(
            `getLocales: Language ${currentDoc.lang} not found in repository languages`
          );
          return {
            ...currentDoc,
            lang_name: currentDoc.lang, // Fallback to lang ID
          };
        }

        return {
          ...currentDoc,
          lang_name: language.name,
        };
      });
    }

    // If no alternate versions exist, create fallback entries for all repository languages
    return repository.languages.map((language) => {
      if (language.id === doc.lang) {
        // Return the current document with lang_name
        return {
          ...doc,
          lang_name: language.name,
        };
      } else {
        // Create a fallback entry for missing languages
        // This will link to the homepage in that language
        const langCode = language.id; // Use the language ID directly
        return {
          id: `fallback-${language.id}`,
          uid: null,
          url: `/${langCode}`,
          type: doc.type,
          lang: language.id,
          alternate_languages: [],
          lang_name: language.name,
          data: {},
          // Add other required fields with sensible defaults
          href: "",
          tags: [],
          first_publication_date: doc.first_publication_date,
          last_publication_date: doc.last_publication_date,
          slugs: [],
          linked_documents: [],
        };
      }
    });
  } catch (error) {
    console.error("getLocales: Unexpected error:", error);
    // Return a fallback with just the current document
    return doc
      ? [
          {
            ...doc,
            lang_name: doc.lang, // Fallback to lang ID
          },
        ]
      : [];
  }
}
