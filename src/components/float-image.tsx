import { cn } from "@/lib/utils";

const FloatImage: React.FC<{
  float: string;
  alt: string;
  src: string;
  children: React.ReactNode;
}> = ({ float, alt, src, children }) => {
  return (
    <div className="">
      <img
        src={src}
        alt={alt}
        className={cn(
          "pb-4",
          float === "left" ? "float-left pr-4" : "float-right pl-4",
        )}
      />
      <p>{children}</p>
    </div>
  );
};

export default FloatImage;
