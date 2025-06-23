import Gallery from "@/components/Gallery";

/**
 * @typedef {import("@prismicio/client").Content.GallerySliceSlice} GallerySliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySliceSlice>} GallerySliceProps
 * @param {GallerySliceProps}
 */
const GallerySlice = ({ slice }) => {
  return <Gallery slice={slice} />;
};

export default GallerySlice;
