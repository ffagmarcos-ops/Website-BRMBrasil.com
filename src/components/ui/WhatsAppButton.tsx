import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

interface WhatsAppButtonProps {
  text?: string;
  variant?: "blue" | "green" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  customMessage?: string;
  showIcon?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text = "Fale Conosco",
  variant = "blue",
  size = "md",
  className = "",
  customMessage,
  showIcon = true,
}) => {
  const message = encodeURIComponent(customMessage || siteConfig.defaultWhatsAppMessage);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

  const baseStyles =
    "inline-flex items-center justify-center font-heading font-semibold rounded-full transition-all duration-300 transform active:scale-95 shadow-sm hover:shadow-md cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    blue: "bg-[#0754A6] hover:bg-[#064385] text-white",
    green: "bg-[#39A844] hover:bg-[#2e8837] text-white",
    outline: "bg-transparent border-2 border-white hover:bg-white/10 text-white",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label={`Falar no WhatsApp: ${text}`}
    >
      {showIcon && <MessageCircle className="w-4 h-4 fill-current shrink-0" />}
      <span>{text}</span>
    </a>
  );
};
