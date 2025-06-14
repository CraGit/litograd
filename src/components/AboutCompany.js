import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default function AboutCompany({ slice }) {
  const {
    overtitle,
    heading,
    content,
    cta_link,
    image_left,
    image_right,
    feature_text,
  } = slice.primary;

  return (
    <div className="about__five section-padding pt-0">
      <div className="container">
        <div className="row al-center">
          <div className="col-lg-5 lg-mb-25">
            <div className="about__five-image wow img_left_animation">
              {image_left && <PrismicNextImage field={image_left} alt="" />}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__five-right ml-70 xl-ml-0">
              <div className="about__five-right-title">
                {overtitle && (
                  <span
                    className="subtitle wow fadeInLeft"
                    data-wow-delay=".4s"
                  >
                    {overtitle}
                  </span>
                )}
                {heading && <h2 className="title_split_anim">{heading}</h2>}
              </div>
              {image_right && (
                <div
                  className="features wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{ backgroundImage: `url(${image_right.url})` }}
                >
                  {feature_text && (
                    <h3 dangerouslySetInnerHTML={{ __html: feature_text }} />
                  )}
                </div>
              )}
              {content && (
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  {content}
                </p>
              )}
              {cta_link && cta_link.url && (
                <div className="item_bounce">
                  <PrismicNextLink
                    field={cta_link}
                    className="build_button mt-20"
                  >
                    {cta_link.text || "See Projects"}
                    <i className="flaticon-right-up"></i>
                  </PrismicNextLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
