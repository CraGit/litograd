import Mission from "@/components/Mission";

/**
 * @typedef {import("@prismicio/client").Content.MissionSliceSlice} MissionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MissionSliceSlice>} MissionSliceProps
 * @type {import("react").FC<MissionSliceProps>}
 */
const MissionSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Mission slice={slice} />{" "}
    </section>
  );
};

export default MissionSlice;
