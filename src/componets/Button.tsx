type props = {
  className?: string;
  size?: string;
  children: string | React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  className = "",
  size = "default",
  children,
  type = "button",
  disabled = false,
  onClick,
}: props) => {
  const baseStyle =
    "cursor-pointer relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";
  const sizes: any = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const style = `${baseStyle} ${sizes[size]} ${className}`;
  return (
    <button className={style} type={type} onClick={onClick} disabled={disabled}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
