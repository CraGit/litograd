export default function Map({ slice }) {
  return (
    <div className="map section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 wow fadeInUp" data-wow-delay=".4s">
            <div className="map-area">
              {slice?.primary?.gmaps_embed && (
                <iframe
                  src={slice.primary.gmaps_embed}
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                  aria-label="Google Maps Location"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
