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
  width = 220,
  height = 52,
}) => {
  const logoPath = variant === "light" ? "/images/logo-brm-light.svg" : "/images/logo-brm.svg";

  return (
    <Link href="/" className={`inline-flex items-center group transition-opacity hover:opacity-95 ${className}`}>
      <Image
        src={logoPath}
        alt="Grupo BRM - Soluções Integradas"
        width={width}
        height={height}
        className="h-auto w-auto max-h-[48px] md:max-h-[56px] object-contain"
        priority
      />
    </Link>
  );
};
