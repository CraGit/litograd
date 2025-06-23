import { PrismicNextImage } from "@prismicio/next";

export default function Gallery({ slice }) {
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
                <div className="portfolio__three-item">
                  {item.image && (
                    <PrismicNextImage
                      field={item.image}
                      alt={item.image.alt || ""}
                      className="img_full"
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
