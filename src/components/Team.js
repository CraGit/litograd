import { PrismicNextImage } from "@prismicio/next";

export default function Team({ slice }) {
  const { overtitle, heading } = slice.primary;
  const { items } = slice;

  return (
    <div className="team__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="team__area-title t-center">
              {overtitle && (
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">
                  {overtitle}
                </span>
              )}
              {heading && <h2 className="title_split_anim">{heading}</h2>}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {items &&
            items.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 lg-mb-25 wow fadeInUp"
                data-wow-delay={`.${6 + index * 3}s`}
              >
                <div className="team__area-item">
                  {item.image && (
                    <div className="team__area-item-image">
                      <PrismicNextImage field={item.image} alt="" />
                    </div>
                  )}
                  <div className="team__area-item-content">
                    {item.name && <h4>{item.name}</h4>}
                    {item.position && <span>{item.position}</span>}
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
