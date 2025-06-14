/**
 * @typedef {import("@prismicio/client").Content.CtaSliceSlice} CtaSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaSliceSlice>} CtaSliceProps
 * @type {import("react").FC<CtaSliceProps>}
 */
import Cta from "@/components/Cta";

const CtaSlice = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Cta slice={slice} />
    </section>
  );
};

export default CtaSlice;
