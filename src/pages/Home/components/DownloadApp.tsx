import bhiveImage from "../../../assets/images/bhive-image.png";
import appMockup from "../../../assets/images/app-mockup.png";
import playstore from "../../../assets/images/playstore.png";
import appstore from "../../../assets/images/appstore.png";
import arrowIcon from "../../../assets/icons/Arrow.svg";

const DownloadApp = () => {
  return (
    <div className="px-4 relative container mx-auto">
      {/* Desktop and Mobile Header */}
      <h2 className="text-textGrey text-2xl lg:text-4xl font-bold lg:pl-9 mb-6 lg:mb-0 flex justify-between items-center">
        Download our app now
        <button>
          <img
            src={arrowIcon}
            alt={"arrow"}
            className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 block lg:hidden"
          />
        </button>
      </h2>

      <div className="relative lg:h-[470px] flex items-end overflow-hidden shadow-custom lg:shadow-none">
        <div className="w-full bg-white lg:border lg:border-gray-200 rounded-xl lg:shadow-custom lg:pt-14 pb-6">
          <div className="px-6 lg:px-0 lg:ml-auto lg:w-2/5 lg:mr-16">
            <div className="flex flex-col items-center lg:items-start mx-auto lg:mx-0 text-center lg:text-left">
              <p className="hidden lg:block text-textGrey text-xl font-medium mb-8">
                Boost your productivity with the BHIVE Workspace app. Elevate
                your workspace, collaborate efficiently, and unlock exclusive
                perks.
              </p>
              {/* App Mockups container for mobile*/}
              <div className="mt-16 relative h-fit w-full max-w-[320px] display lg:hidden overflow-hidden">
                <img
                  src={bhiveImage}
                  alt="App Mockup"
                  className="w-1/2 z-10 relative"
                />
                <img
                  src={appMockup}
                  alt="App Mockup"
                  className="absolute top-[7%] left-[45%] z-0 w-[55%]"
                />
              </div>
              {/* App store and Playstore links*/}
              <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <img
                    src={playstore}
                    alt="Play Store"
                    className="w-full h-12"
                  />
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <img src={appstore} alt="App Store" className="w-full h-12" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* App Mockups container for desktop*/}
        <div className="absolute lg:bottom-0 left-[2%] z-10 lg:block flex justify-center w-full lg:w-auto hidden lg:block">
          <div className="relative">
            <img src={bhiveImage} alt="App Mockup" className="z-10 relative" />
            <img
              src={appMockup}
              alt="App Mockup"
              className="absolute bottom-[-20px] left-[90%] z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
