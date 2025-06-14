export default function Mission({ slice }) {
  const {
    overtitle,
    heading,
    subheading_one,
    content_one,
    subheading_two,
    content_two,
  } = slice.primary;

  return (
    <div className="mission__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 lg-mb-25">
            <div className="mission__area-left mr-40 xl-mr-0">
              {overtitle && (
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">
                  {overtitle}
                </span>
              )}
              {heading && <h2 className="title_split_anim">{heading}</h2>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mission__area-right">
              <div className="row">
                {(subheading_one || content_one) && (
                  <div
                    className="col-md-6 md-mb-25 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="experience__area-list-item">
                      <i className="flaticon-team"></i>
                      <div className="experience__area-list-item-content">
                        {subheading_one && <h4>{subheading_one}</h4>}
                        {content_one && <p>{content_one}</p>}
                      </div>
                    </div>
                  </div>
                )}
                {(subheading_two || content_two) && (
                  <div className="col-md-6 wow fadeInUp" data-wow-delay=".9s">
                    <div className="experience__area-list-item">
                      <i className="flaticon-technology"></i>
                      <div className="experience__area-list-item-content">
                        {subheading_two && <h4>{subheading_two}</h4>}
                        {content_two && <p>{content_two}</p>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
