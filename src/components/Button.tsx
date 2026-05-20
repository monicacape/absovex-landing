import Image from "next/image";

type ButtonVariant = "default" | "secondary" | "pink";
type ButtonSize = "small" | "default";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  showArrow?: boolean;
  hideShadow?: boolean;
  size?: ButtonSize;
}

export default function Button({
  variant = "default",
  showArrow = false,
  hideShadow = false,
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-4 rounded-card lg:py-3 font-medium transition-opacity hover:opacity-90 w-full md:w-auto";

  const sizes: Record<ButtonSize, string> = {
    default: "px-8 py-4 text-lg lg:text-base",
    small: "px-6 py-3 text-base",
  };

  const variants: Record<ButtonVariant, string> = {
    default: "bg-accent text-white",
    secondary: "bg-white text-pink",
    pink: "bg-pink text-white",
  };

  const shadowColor: Record<ButtonVariant, string> = {
    default: "bg-shadow-teal",
    secondary: "bg-shadow-cream",
    pink: "bg-shadow-pink",
  };

  return (
    <div className="relative w-full md:w-auto md:shrink-0">
      {!hideShadow && (
        <div
          className={`absolute -bottom-2 left-2.5 opacity-80 right-2.5 h-3 rounded-full blur-button ${shadowColor[variant]}`}
        />
      )}
      <a
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
        {showArrow && (
          <Image
            src="/arrow.svg"
            alt=""
            width={17}
            height={12}
            aria-hidden="true"
            className={variant === "secondary" ? "brightness-0" : undefined}
          />
        )}
      </a>
    </div>
  );
}
