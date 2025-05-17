import NextLink from "next/link";
import { CustomLinkProps } from "@/app/types/types";

export const Link = ({
  href,
  className = "",
  children,
  ...rest
}: CustomLinkProps) => {
  return (
    <NextLink href={href} className={className} {...rest}>
      {children}
    </NextLink>
  );
};
