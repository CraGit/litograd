import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default function ServiceDetail({ slice }) {
  return (
    <div className="services__details section-padding">
      <div className="container">
        {/* First Section - Image Left, Content Right */}
        <div className="row align-items-center mb-60">
          <div className="col-lg-6 lg-mb-30">
            {slice?.primary?.service_image && (
              <div className="services__details-image">
                <PrismicNextImage
                  field={slice.primary.service_image}
                  className="img_full"
                  priority={false}
                />
              </div>
            )}
          </div>
          <div className="col-lg-6">
            <div className="services__details-content">
              {slice?.primary?.service_title && (
                <div className="services__details-title">
                  <span className="services__details-overtitle">
                    O NAŠOJ TVRTKI
                  </span>
                  <PrismicRichText
                    field={slice.primary.service_title}
                    components={{
                      heading1: ({ children }) => (
                        <h1 className="services__details-heading">
                          {children}
                        </h1>
                      ),
                      heading2: ({ children }) => (
                        <h2 className="services__details-heading">
                          {children}
                        </h2>
                      ),
                      heading3: ({ children }) => (
                        <h3 className="services__details-heading">
                          {children}
                        </h3>
                      ),
                      heading4: ({ children }) => (
                        <h4 className="services__details-heading">
                          {children}
                        </h4>
                      ),
                      heading5: ({ children }) => (
                        <h5 className="services__details-heading">
                          {children}
                        </h5>
                      ),
                      heading6: ({ children }) => (
                        <h6 className="services__details-heading">
                          {children}
                        </h6>
                      ),
                    }}
                  />
                </div>
              )}

              {slice?.primary?.service_content && (
                <div className="services__details-text">
                  <PrismicRichText
                    field={slice.primary.service_content}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mb-20">{children}</p>
                      ),
                      heading1: ({ children }) => (
                        <h1 className="mb-20">{children}</h1>
                      ),
                      heading2: ({ children }) => (
                        <h2 className="mb-20">{children}</h2>
                      ),
                      heading3: ({ children }) => (
                        <h3 className="mb-20">{children}</h3>
                      ),
                      heading4: ({ children }) => (
                        <h4 className="mb-20">{children}</h4>
                      ),
                      heading5: ({ children }) => (
                        <h5 className="mb-20">{children}</h5>
                      ),
                      heading6: ({ children }) => (
                        <h6 className="mb-20">{children}</h6>
                      ),
                      list: ({ children }) => (
                        <ul className="services__details-area-list">
                          {children}
                        </ul>
                      ),
                      listItem: ({ children }) => (
                        <li>
                          <i className="flaticon-check-mark"></i>
                          {children}
                        </li>
                      ),
                      oList: ({ children }) => (
                        <ol className="services__details-area-list numbered">
                          {children}
                        </ol>
                      ),
                      oListItem: ({ children }) => <li>{children}</li>,
                      strong: ({ children }) => <strong>{children}</strong>,
                      em: ({ children }) => <em>{children}</em>,
                      hyperlink: ({ children, node }) => (
                        <a
                          href={node.data.url}
                          target={node.data.target || "_self"}
                        >
                          {children}
                        </a>
                      ),
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Second Section - Content Left, Image Right */}
        {slice?.primary?.gallery_image_1 && (
          <div className="row align-items-center mb-60">
            <div className="col-lg-6 lg-mb-30">
              <div className="services__details-content">
                <span className="services__details-overtitle">
                  GRADIMO POVJERENJE
                </span>
                <h3 className="services__details-heading">
                  Gradimo povjerenje od 1994.
                </h3>
                <div className="services__details-text">
                  <p className="mb-20">
                    Litograd d.o.o. je obiteljsko poduzeće koje djeluje od 1994.
                    godine. Na temelju tri desetljeća iskustva izgradili smo
                    reputaciju pouzdanog partnera u građevinskoj industriji.
                  </p>
                  <p className="mb-20">
                    Danas zapošljavamo preko 20 djelatnika u Hrvatskoj i više od
                    15 u našoj podružnici u Njemačkoj.
                  </p>

                  {/* Features Section */}
                  {slice?.primary?.features_title &&
                    slice?.items?.length > 0 && (
                      <div className="services__details-features mt-30">
                        <ul className="services__details-area-list">
                          {slice.items.map((feature, index) => (
                            <li key={index}>
                              <i className="flaticon-check-mark"></i>
                              {feature.feature_text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services__details-image">
                <PrismicNextImage
                  field={slice.primary.gallery_image_1}
                  className="img_full"
                  priority={false}
                />
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {(slice?.primary?.cta_title ||
          slice?.primary?.cta_text ||
          slice?.primary?.cta_button_text) && (
          <div className="row">
            <div className="col-lg-12">
              <div className="services__details-cta">
                <div className="services__details-cta-content">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      {slice?.primary?.cta_title && (
                        <h3 className="services__details-cta-title">
                          {slice.primary.cta_title}
                        </h3>
                      )}
                      {slice?.primary?.cta_text && (
                        <p className="services__details-cta-text">
                          {slice.primary.cta_text}
                        </p>
                      )}
                    </div>
                    <div className="col-lg-4 text-lg-end text-center">
                      {slice?.primary?.cta_button_text &&
                        slice?.primary?.cta_button_link && (
                          <PrismicNextLink
                            field={slice.primary.cta_button_link}
                            className="build_button"
                          >
                            {slice.primary.cta_button_text}
                            <i className="flaticon-right-up"></i>
                          </PrismicNextLink>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
