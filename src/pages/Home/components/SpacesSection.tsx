import { useEffect, useState } from "react";
import SpaceCard from "./SpaceCard";
import { fetchSpaces } from "../../../api/spacesAPIs";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { setSpaceList } from "../../../redux/slices/spaceSlice";
import arrowIcon from "../../../assets/icons/Arrow.svg";
import Loader from "../../../components/Loader";

export default function SpacesSection() {
  const { spaces } = useSelector((state: RootState) => state.space);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSpaces();
      if (data?.length > 0) {
        dispatch(setSpaceList({ spaces: data }));
      }
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  return (
    <section className="container px-4 md:px-0 mx-auto mb-16 md:mb-28">
      <h2 className="font-bold mb-14 text-4xl hidden md:block">
        Our Space Overview
      </h2>
      <h2 className="font-bold mb-8 text-2xl block md:hidden flex justify-between items-center">
        Our Spaces
        <button>
          <img
            src={arrowIcon}
            alt={"arrow"}
            className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 block lg:hidden"
          />
        </button>
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      )}
    </section>
  );
}
