/**
 * Returns an array of document metadata containing each locale a document has
 * been translated into.
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

    console.log("getLocales: Processing document:", {
      type: doc.type,
      lang: doc.lang,
      uid: doc.uid,
      alternateLanguagesCount: doc.alternate_languages?.length || 0,
    });

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

    console.log("getLocales: Repository languages:", repository.languages);
    console.log("getLocales: Alternate documents found:", altDocs.length);

    const allDocs = [doc, ...altDocs];

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
