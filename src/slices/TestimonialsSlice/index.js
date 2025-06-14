import Testimonials from "@/components/Testimonials";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSliceSlice} TestimonialsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSliceSlice>} TestimonialsSliceProps
 * @type {import("react").FC<TestimonialsSliceProps>}
 */
const TestimonialsSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Testimonials slice={slice} />
    </section>
  );
};

export default TestimonialsSlice;
