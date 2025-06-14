/**
 * @typedef {import("@prismicio/client").Content.MapSliceSlice} MapSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MapSliceSlice>} MapSliceProps
 * @type {import("react").FC<MapSliceProps>}
 */
import Map from "@/components/Map";

const MapSlice = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Map slice={slice} />
    </section>
  );
};

export default MapSlice;
