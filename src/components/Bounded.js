import clsx from "clsx";

export function Bounded({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  className,
  children,
}) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        "px-3 px-md-4",
        yPadding === undefined && "py-5 py-md-6",
        yPadding === "sm" && "py-3 py-md-4",
        yPadding === "base" && "py-5 py-md-6",
        className
      )}
    >
      <div className="container-fluid" style={{ maxWidth: "1200px" }}>
        {children}
      </div>
    </Comp>
  );
}
