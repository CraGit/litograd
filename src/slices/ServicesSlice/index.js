import Services from "@/components/Services";

/**
 * @typedef {import("@prismicio/client").Content.ServicesSliceSlice} ServicesSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSliceSlice>} ServicesSliceProps
 * @type {import("react").FC<ServicesSliceProps>}
 */
const ServicesSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Services slice={slice} />
    </section>
  );
};

export default ServicesSlice;
