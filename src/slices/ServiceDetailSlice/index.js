/**
 * @typedef {import("@prismicio/client").Content.ServiceDetailSliceSlice} ServiceDetailSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServiceDetailSliceSlice>} ServiceDetailSliceProps
 * @type {import("react").FC<ServiceDetailSliceProps>}
 */
import ServiceDetail from "@/components/ServiceDetail";

const ServiceDetailSlice = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServiceDetail slice={slice} />
    </section>
  );
};

export default ServiceDetailSlice;
