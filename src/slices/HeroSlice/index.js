/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @type {import("react").FC<HeroSliceProps>}
 */
import Hero from "@/components/Hero";
const HeroSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Hero slice={slice} />
    </section>
  );
};

export default HeroSlice;
