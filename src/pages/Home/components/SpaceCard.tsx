import type { SpaceDetailsType } from "../../../types";
import direction from "../../../assets/icons/direction.svg";
import ChevronsIcon from "../../../assets/icons/chevrons";
import noImage from "../../../assets/images/no-image.png";

const SpaceCard = ({ space }: { space: SpaceDetailsType }) => {
  const {
    name,
    address,
    images,
    day_pass_price,
    day_pass_discounts_percentage,
  } = space;

  const bulkDays = 10;
  const discount = day_pass_discounts_percentage[bulkDays]?.value || 0;
  const bulkPassPrice = day_pass_price * bulkDays * (1 - discount / 100);

  const distance = "6";

  const shortAddress = address.split(",").slice(0, 2).join(", ");

  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden max-w-lg">
      {/* Address and distance */}
      <div className="p-4 flex justify-between items-center h-20">
        <div className="w-3/4 text-lg md:text-xl font-semibold leading-snug line-clamp-2 overflow-hidden">
          {shortAddress}
        </div>

        <div className="h-full aspect-square flex flex-col items-center justify-center gap-1 bg-lightGrey border border-gray-300 rounded-md p-2">
          <img src={direction} alt="Distance" className="h-5" />
          <div className="text-xxs font-medium text-gray-500">
            {distance} Kms
          </div>
        </div>
      </div>

      {/* Main image */}
      <div className="w-full px-4">
        <img
          src={
            images && images.length > 0
              ? `https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${images[0]}`
              : noImage
          }
          alt={`${name}`}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <div className="p-4 flex gap-4">
        {/* Day Pass Card*/}
        <div className="h-fit flex-1 bg-lightGrey border border-darkGrey-300 rounded-lg p-2">
          <div className="flex flex-col gap-1">
            <h3 className="w-full -mb-2 text-xs md:text-sm font-medium text-textSecondary">
              Day Pass
            </h3>
            <div className="w-full flex justify-end">
              <ChevronsIcon />
            </div>
            <p className="w-full -mt-5 text-textMain text-lg md:text-xl font-semibold">
              ₹ {day_pass_price}
              <span className="text-xs text-textSecondary">/Day</span>
            </p>
          </div>
        </div>

        {/* Bulk Pass Card */}
        <div className="flex-1 h-fit bg-lightYellow border border-darkYellow-300 rounded-lg p-2 relative">
          {discount > 0 && (
            <div className="absolute top-[-10px] right-[33%] bg-gray-800 text-white px-2 py-1 text-xxs rounded-sm">
              {discount}% Discount
            </div>
          )}
          <div className="flex flex-col gap-1">
            <h3 className="w-full -mb-2 text-xs md:text-sm font-medium text-textSecondary">
              Bulk Pass
            </h3>
            <div className="w-full flex justify-end">
              <ChevronsIcon />
            </div>
            <p className="w-full -mt-5 text-textMain text-lg md:text-xl font-semibold">
              ₹ {bulkPassPrice}
              <span className="text-xs text-textSecondary">
                /{bulkDays} Days
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
