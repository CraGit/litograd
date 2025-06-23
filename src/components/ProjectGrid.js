import Link from "next/link";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default function ProjectGrid({ slice }) {
  const { overtitle, heading } = slice.primary;
  const { items } = slice;

  return (
    <div className="portfolio__three section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="portfolio__three-title t-center">
              {overtitle && (
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">
                  {overtitle}
                </span>
              )}
              {heading && <h2 className="title_split_anim">{heading}</h2>}
            </div>
          </div>
        </div>
        <div className="row">
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className="col-lg-6 col-md-6 mb-30 wow fadeInUp"
                data-wow-delay={`.${6 + index * 3}s`}
              >
                {item.project_link && item.project_link.uid ? (
                  <PrismicNextLink
                    field={item.project_link}
                    className="portfolio__three-item-link"
                  >
                    <div className="portfolio__three-item">
                      {item.image && (
                        <PrismicNextImage
                          field={item.image}
                          alt=""
                          className="img_full"
                        />
                      )}
                      <div className="portfolio__three-item-content">
                        {item.title && <h4>{item.title}</h4>}
                        {item.description && <p>{item.description}</p>}
                        <div className="project__grid-link">
                          <i className="flaticon-right-up"></i>
                        </div>
                      </div>
                    </div>
                  </PrismicNextLink>
                ) : (
                  <div className="portfolio__three-item">
                    {item.image && (
                      <PrismicNextImage
                        field={item.image}
                        alt=""
                        className="img_full"
                      />
                    )}
                    <div className="portfolio__three-item-content">
                      {item.title && <h4>{item.title}</h4>}
                      {item.description && <p>{item.description}</p>}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
