/**
 * @typedef {import("@prismicio/client").Content.AboutCompanySliceSlice} AboutCompanySliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutCompanySliceSlice>} AboutCompanySliceProps
 * @type {import("react").FC<AboutCompanySliceProps>}
 */
import AboutCompany from "@/components/AboutCompany";

const AboutCompanySlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AboutCompany slice={slice} />
    </section>
  );
};

export default AboutCompanySlice;
