/**
 * @typedef {import("@prismicio/client").Content.TeamSliceSlice} TeamSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSliceSlice>} TeamSliceProps
 * @type {import("react").FC<TeamSliceProps>}
 */
import Team from "@/components/Team";

const TeamSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Team slice={slice} />
    </section>
  );
};

export default TeamSlice;
