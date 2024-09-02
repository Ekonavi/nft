import { cn } from "@/lib/utils";

const CollectionInfo: React.FC<{
  name: string;
  description: string;
  coverImage: string;
  nftImage: string;
  production: string;
  supply: number;
  contractAddress: string;
  openSeaLink: string;
  profileLink: string;
}> = ({
  name,
  description,
  coverImage,
  nftImage,
  production,
  supply,
  contractAddress,
  profileLink,
}) => {
  if (!contractAddress) return null;

  const classNameColLeft =
    "text-sm font-bold bg-white/10 px-4 py-4 overflow-hidden overflow-ellipsis";
  const classNameColRight =
    "text-sm px-4 py-4 overflow-hidden overflow-ellipsis whitespace-nowrap w-full";

  const explorerContractLink = `https://arbiscan.io/address/${contractAddress}`;
  const marketplaceLink = `https://opensea.io/assets/arbitrum/${contractAddress}/1`;

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
        <div
          className={`absolute bottom-1 right-2 bold p-4 text-yellow-200 drop-shadow-[0_1px_1px_#000]`}
        >
          {nftImage}
        </div>
      </div>
      <div className={classNameColLeft}>Supply</div>
      <div className={classNameColRight}>{supply}</div>
      <div className={classNameColLeft}>Arbitrum Contract</div>
      <div className={classNameColRight}>
        <a
          href={explorerContractLink}
          target="_blank"
          rel="noreferrer"
          className={`underline`}
        >
          {explorerContractLink}
        </a>
      </div>
      <div className={classNameColLeft}>Marketplace Link</div>
      <div className={classNameColRight}>
        <a
          href={marketplaceLink}
          target="_blank"
          rel="noreferrer"
          className={`underline`}
        >
          {marketplaceLink}
        </a>
      </div>
      <div className={classNameColLeft}>Profile Link</div>
      <div className={classNameColRight}>
        <a
          href={profileLink}
          target="_blank"
          rel="noreferrer"
          className={`underline`}
        >
          {profileLink}
        </a>
      </div>
    </div>
  );
};

export default CollectionInfo;
