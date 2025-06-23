import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

const rtfComponents = {
  heading1: ({ children }) => (
    <h1
      style={{
        fontSize: "56px",
        lineHeight: "66px",
        marginBottom: "30px",
        color: "var(--text-heading-color)",
        fontFamily: "var(--heading-font)",
        fontWeight: "500",
      }}
    >
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2
      style={{
        fontSize: "36px",
        lineHeight: "46px",
        marginBottom: "25px",
        color: "var(--text-heading-color)",
        fontFamily: "var(--heading-font)",
        fontWeight: "500",
      }}
    >
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3
      style={{
        fontSize: "28px",
        lineHeight: "38px",
        marginBottom: "20px",
        color: "var(--text-heading-color)",
        fontFamily: "var(--heading-font)",
        fontWeight: "500",
      }}
    >
      {children}
    </h3>
  ),
  heading4: ({ children }) => (
    <h4
      style={{
        fontSize: "22px",
        lineHeight: "32px",
        marginBottom: "18px",
        color: "var(--text-heading-color)",
        fontFamily: "var(--heading-font)",
        fontWeight: "500",
      }}
    >
      {children}
    </h4>
  ),
  heading5: ({ children }) => (
    <h5
      style={{
        fontSize: "18px",
        lineHeight: "28px",
        marginBottom: "15px",
        color: "var(--text-heading-color)",
        fontFamily: "var(--heading-font)",
        fontWeight: "500",
      }}
    >
      {children}
    </h5>
  ),
  heading6: ({ children }) => (
    <h6
      style={{
        fontSize: "16px",
        lineHeight: "26px",
        marginBottom: "15px",
        color: "var(--text-heading-color)",
        fontFamily: "var(--heading-font)",
        fontWeight: "500",
      }}
    >
      {children}
    </h6>
  ),
  paragraph: ({ children }) => (
    <p
      style={{
        fontSize: "18px",
        lineHeight: "30px",
        marginBottom: "20px",
        color: "var(--body-color)",
        fontFamily: "var(--body-font)",
      }}
    >
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong
      style={{
        fontWeight: "600",
        color: "var(--text-heading-color)",
      }}
    >
      {children}
    </strong>
  ),
  hyperlink: ({ node, children, key }) => (
    <PrismicNextLink
      key={key}
      field={node.data}
      style={{
        color: "var(--primary-color-1)",
        textDecoration: "underline",
        fontWeight: "500",
      }}
      className="hover-color-change"
    >
      {children}
    </PrismicNextLink>
  ),
  em: ({ children }) => (
    <em
      style={{
        fontStyle: "italic",
        color: "var(--body-color)",
      }}
    >
      {children}
    </em>
  ),
  listItem: ({ children }) => (
    <li
      style={{
        marginBottom: "10px",
        fontSize: "18px",
        lineHeight: "30px",
        color: "var(--body-color)",
        fontFamily: "var(--body-font)",
      }}
    >
      {children}
    </li>
  ),
  oListItem: ({ children }) => (
    <li
      style={{
        marginBottom: "10px",
        fontSize: "18px",
        lineHeight: "30px",
        color: "var(--body-color)",
        fontFamily: "var(--body-font)",
      }}
    >
      {children}
    </li>
  ),
  list: ({ children }) => (
    <ul
      style={{
        marginBottom: "25px",
        paddingLeft: "30px",
        listStyleType: "disc",
      }}
    >
      {children}
    </ul>
  ),
  oList: ({ children }) => (
    <ol
      style={{
        marginBottom: "25px",
        paddingLeft: "30px",
        listStyleType: "decimal",
      }}
    >
      {children}
    </ol>
  ),
  preformatted: ({ children }) => (
    <pre
      style={{
        backgroundColor: "var(--bg-color-2)",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "25px",
        overflowX: "auto",
        fontSize: "14px",
        fontFamily: "monospace",
        border: "1px solid #e0e0e0",
      }}
    >
      {children}
    </pre>
  ),
  image: ({ node }) => (
    <div
      style={{
        marginBottom: "30px",
        marginTop: "30px",
      }}
    >
      <PrismicNextImage
        field={node}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  ),
  embed: ({ node }) => (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%",
        marginBottom: "30px",
        marginTop: "30px",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          borderRadius: "10px",
          border: "none",
        }}
        src={node.oembed.embed_url}
        allowFullScreen
      />
    </div>
  ),
};

export default rtfComponents;
