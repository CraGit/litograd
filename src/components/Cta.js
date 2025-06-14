import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export default function Cta({ slice }) {
  const { primary } = slice;

  return (
    <div className="services__details-cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="services__details-cta-content">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  {primary?.overtitle && (
                    <span className="services__details-cta-overtitle">
                      {primary.overtitle}
                    </span>
                  )}
                  {primary?.title && (
                    <PrismicRichText
                      field={primary.title}
                      components={{
                        heading1: ({ children }) => (
                          <h1 className="services__details-cta-title">
                            {children}
                          </h1>
                        ),
                        heading2: ({ children }) => (
                          <h2 className="services__details-cta-title">
                            {children}
                          </h2>
                        ),
                        heading3: ({ children }) => (
                          <h3 className="services__details-cta-title">
                            {children}
                          </h3>
                        ),
                        heading4: ({ children }) => (
                          <h4 className="services__details-cta-title">
                            {children}
                          </h4>
                        ),
                        heading5: ({ children }) => (
                          <h5 className="services__details-cta-title">
                            {children}
                          </h5>
                        ),
                        heading6: ({ children }) => (
                          <h6 className="services__details-cta-title">
                            {children}
                          </h6>
                        ),
                      }}
                    />
                  )}
                  {primary?.description && (
                    <PrismicRichText
                      field={primary.description}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="services__details-cta-text">
                            {children}
                          </p>
                        ),
                      }}
                    />
                  )}
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  {primary?.button_text && primary?.button_link && (
                    <PrismicNextLink
                      field={primary.button_link}
                      className="build_button"
                    >
                      {primary.button_text}
                      <i className="flaticon-right-up"></i>
                    </PrismicNextLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
