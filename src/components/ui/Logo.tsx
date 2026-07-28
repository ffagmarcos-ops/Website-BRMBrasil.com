import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  className = "",
  width = 280,
  height = 80,
}) => {
  const logoPath = variant === "light" ? "/images/logo-brm-light.png" : "/images/logo-brm.png";

  return (
    <Link href="/" className={`inline-flex items-center group transition-opacity hover:opacity-95 ${className}`}>
      <Image
        src={logoPath}
        alt="Grupo BRM - Soluções Integradas"
        width={width}
        height={height}
        className="h-auto w-auto max-h-[72px] md:max-h-[96px] object-contain"
        priority
      />
    </Link>
  );
};
