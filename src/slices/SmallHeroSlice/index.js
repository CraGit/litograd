import SmallHero from "@/components/SmallHero";

/**
 * @typedef {import("@prismicio/client").Content.SmallHeroSliceSlice} SmallHeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SmallHeroSliceSlice>} SmallHeroSliceProps
 * @type {import("react").FC<SmallHeroSliceProps>}
 */
const SmallHeroSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SmallHero slice={slice} />
    </section>
  );
};

export default SmallHeroSlice;
