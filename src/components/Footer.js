import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { PrismicRichText } from "./PrismicRichText";

function SignUpForm({ settings }) {
  return (
    <div className="px-3">
      <form
        action="/api/sign-up"
        method="post"
        className="row g-3 justify-content-center"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
          <div className="col-12 text-center text-light">
            <PrismicRichText
              field={settings.data.newsletterDescription}
              components={{
                heading1: ({ children }) => (
                  <Heading as="h2" size="6xl" className="mb-3 text-white">
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }) => <p className="mb-3">{children}</p>,
              }}
            />
          </div>
        )}
        <div className="col-12">
          <div className="position-relative">
            <label>
              <span className="visually-hidden">Email address</span>
              <input
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                required={true}
                className="form-control py-3 pe-5 bg-dark border-secondary text-white"
                style={{ paddingRight: "50px" }}
              />
            </label>
            <button
              type="submit"
              className="btn position-absolute top-0 end-0 h-100 px-3 text-secondary border-0 bg-transparent"
            >
              <span className="visually-hidden">Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div>
          {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
            <p className="text-center small text-muted mt-2">
              <PrismicText field={settings.data.newsletterDisclaimer} />
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export function Footer({ settings }) {
  return (
    <Bounded as="footer" className="bg-dark text-light py-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <SignUpForm settings={settings} />
        </div>
        <div className="col-12 text-center mt-4">
          <p className="small mb-0">
            Proudly published using{" "}
            <PrismicNextLink
              href="https://prismic.io"
              className="text-white text-decoration-none"
            >
              Prismic
            </PrismicNextLink>
          </p>
        </div>
      </div>
    </Bounded>
  );
}
