import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export default function ServiceDetail({ slice }) {
  const services = slice?.items || [];

  return (
    <div className="services__details section-padding">
      <div className="container">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`row align-items-center ${index < services.length - 1 ? "mb-60" : ""}`}
            >
              {/* Content Column */}
              <div
                className={`col-lg-6 ${!isEven ? "order-lg-2" : ""} lg-mb-30`}
              >
                <div className="services__details-content">
                  {service?.overtitle && (
                    <span className="services__details-overtitle">
                      {service.overtitle}
                    </span>
                  )}

                  {service?.header && (
                    <div className="services__details-title">
                      <PrismicRichText
                        field={service.header}
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

                  {service?.content && (
                    <div className="services__details-text">
                      <PrismicRichText
                        field={service.content}
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

                  {service?.bullets && service.bullets.length > 0 && (
                    <div className="services__details-features mt-30">
                      <ul className="services__details-area-list">
                        {service.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>
                            <i className="flaticon-check-mark"></i>
                            {bullet.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Image Column */}
              <div className={`col-lg-6 ${!isEven ? "order-lg-1" : ""}`}>
                {service?.image && (
                  <div className="services__details-image">
                    <PrismicNextImage
                      field={service.image}
                      className="img_full"
                      priority={index === 0}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
