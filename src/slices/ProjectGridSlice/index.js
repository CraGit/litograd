/**
 * @typedef {import("@prismicio/client").Content.ProjectGridSliceSlice} ProjectGridSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectGridSliceSlice>} ProjectGridSliceProps
 * @type {import("react").FC<ProjectGridSliceProps>}
 */
import ProjectGrid from "@/components/ProjectGrid";

const ProjectGridSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ProjectGrid slice={slice} />
    </section>
  );
};

export default ProjectGridSlice;
