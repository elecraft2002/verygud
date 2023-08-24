import React, { ReactElement } from "react";
import clsx from "clsx";

interface BoundedProps extends React.HTMLAttributes<HTMLAllCollection> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps): React.JSX.Element {
  return (
    <Comp
      className={clsx(
        "flex flex-col p-4 rounded-md justify-center items-center",
        className
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
