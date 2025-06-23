import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import rtfComponents from "@/utils/richtText";

/**
 * @typedef {import("@prismicio/client").Content.RichTextSliceSlice} RichTextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextSliceSlice>} RichTextSliceProps
 * @param {RichTextSliceProps}
 */
const RichTextSlice = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="rich-text-content">
        <PrismicRichText
          field={slice.primary.content}
          components={rtfComponents}
        />
      </div>
    </Bounded>
  );
};

export default RichTextSlice;
