import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";

/** @type {import("@prismicio/react").JSXMapSerializer} */
const defaultComponents = {
  paragraph: ({ children }) => <p className="mb-4">{children}</p>,
  oList: ({ children }) => <ol className="mb-4 ps-4">{children}</ol>,
  oListItem: ({ children }) => <li className="mb-1">{children}</li>,
  list: ({ children }) => <ul className="mb-4 ps-4">{children}</ul>,
  listItem: ({ children }) => <li className="mb-1">{children}</li>,
  preformatted: ({ children }) => (
    <pre className="mb-4 bg-light p-3 rounded small">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => <strong className="fw-semibold">{children}</strong>,
  hyperlink: ({ children, node }) => (
    <PrismicNextLink field={node.data} className="text-decoration-underline">
      {children}
    </PrismicNextLink>
  ),
};

export function PrismicRichText({ components, ...props }) {
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
