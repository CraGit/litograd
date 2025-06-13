import clsx from "clsx";

export function Heading({
  as: Comp = "h1",
  size = "8xl",
  children,
  className,
}) {
  return (
    <Comp
      className={clsx(
        "fw-semibold",
        size === "8xl" && "display-1",
        size === "6xl" && "display-3",
        size === "2xl" && "h2",
        className
      )}
    >
      {children}
    </Comp>
  );
}
