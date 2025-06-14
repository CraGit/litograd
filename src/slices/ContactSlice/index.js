/**
 * @typedef {import("@prismicio/client").Content.ContactSliceSlice} ContactSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSliceSlice>} ContactSliceProps
 * @type {import("react").FC<ContactSliceProps>}
 */
import Contact from "@/components/Contact";

const ContactSlice = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Contact slice={slice} settings={context?.settings} />
    </section>
  );
};

export default ContactSlice;
