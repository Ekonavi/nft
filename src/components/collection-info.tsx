import { cn } from "@/lib/utils";

const CollectionInfo: React.FC<{
  name: string;
  description: string;
  coverImage: string;
  nftImage: string;
  production: string;
  supply: number;
}> = ({ name, description, coverImage, nftImage, production, supply }) => {
  const classNameColLeft = "text-sm font-bold bg-white/10 px-4 py-4";
  const classNameColRight = "text-sm px-4 py-4";
  return (
    <div className="grid grid-cols-[20%,1fr] border bg-[#345d4b] overflow-hidden rounded-2xl !text-white mb-12 shadow-xl drop-shadow-lg">
      <div className={classNameColLeft}>Name</div>
      <div className={cn(classNameColRight, "text-xl ")}>{name}</div>
      <div className={classNameColLeft}>Description</div>
      <div className={classNameColRight}>{description}</div>
      {production && (
        <>
          <div className={classNameColLeft}>Production</div>
          <div className={classNameColRight}>{production}</div>
        </>
      )}
      <div className={classNameColLeft}>Cover Image</div>
      <div className={cn(classNameColRight, "relative w-1/2")}>
        <img
          src={coverImage}
          alt="cover image"
          className={`shadow-xl drop-shadow-lg rounded-xl`}
        />
      </div>
      <div className={classNameColLeft}>NFT Image</div>
      <div className={cn(classNameColRight, "relative w-1/2")}>
        <img
          src={`/images/nft-ratings/${nftImage}.webp`}
          alt="nft image"
          className={`shadow-xl drop-shadow-lg rounded-xl`}
        />
        <div className={`absolute bottom-1 right-2 bold p-4 text-yellow-200`}>
          {nftImage}
        </div>
      </div>
      <div className={classNameColLeft}>Supply</div>
      <div className={classNameColRight}>{supply}</div>
    </div>
  );
};

export default CollectionInfo;
