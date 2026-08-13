import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

type BrandLogoProps = {
  className?: string;
  alt?: string;
  priority?: boolean;
};

export function BrandLogo({
  className,
  alt = "شعار نور العرب",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={logo}
      alt={alt}
      className={cn("h-full w-full object-cover object-center", className)}
      priority={priority}
      unoptimized
    />
  );
}
