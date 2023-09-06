import type { NextPage } from "next";
import { useCallback } from "react";
import { Menu, Button, MenuButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Hero: NextPage = () => {
  const router = useRouter();

  const onSearchCTAClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <form className="self-stretch flex flex-col items-center justify-start gap-[17px] sm:self-stretch sm:w-auto sm:h-auto">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start"
              autoFocus
            >
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-primary-400 text-center">
                Sale
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center lg:flex-1 md:flex-1 sm:flex-1">
            <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] lg:self-stretch lg:h-auto md:w-full md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-center">
                  Locations
                </div>
                <div>
                  <label className="cursor-pointer relative text-base leading-[24px] font-body-regular-600 text-lightslategray text-left">
                    Select your city
                  </label>
                  <img
                    className="relative w-2.5 h-1.5 overflow-hidden shrink-0"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                  Property Type
                </div>
                <Menu className="self-stretch">
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    colorScheme="blue"
                  >
                    Dropdown
                  </MenuButton>
                </Menu>
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                  Rent Range
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <label className="cursor-pointer relative text-base leading-[24px] font-body-regular-600 text-lightslategray text-left">
                    Select rent range
                  </label>
                  <img
                    className="relative w-2.5 h-1.5 overflow-hidden shrink-0"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded w-[102px] flex flex-row box-border items-center justify-center hover:bg-steelblue"
                onClick={onSearchCTAClick}
              >
                <a className="[text-decoration:none] relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                  Search
                </a>
              </button>
            </nav>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
