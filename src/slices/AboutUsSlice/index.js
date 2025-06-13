/**
 * @typedef {import("@prismicio/client").Content.AboutUsSliceSlice} AboutUsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutUsSliceSlice>} AboutUsSliceProps
 * @type {import("react").FC<AboutUsSliceProps>}
 */
import AboutUs from "@/components/AboutUs";
const AboutUsSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AboutUs slice={slice} />
    </section>
  );
};

export default AboutUsSlice;
