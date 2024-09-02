import { cn } from "@/lib/utils";

const FloatImage: React.FC<{
  float: string;
  alt: string;
  src: string;
  children: React.ReactNode;
  className?: string;

  classNameImg?: string;
  classNameText?: string;
}> = ({
  float,
  alt,
  src,
  children,
  className,
  classNameImg,
  classNameText,
}) => {
  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "mb-4 ",
          float === "left" ? "float-left mr-4" : "float-right ml-4",
          classNameImg,
        )}
      />
      <p className={cn("", classNameText)}>{children}</p>
    </div>
  );
};

export default FloatImage;
