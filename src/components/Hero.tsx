"use client";
import {
  Delivery,
  Diamond_Cart_bg,
  Golden_Cart_bg,
  Key_Svg,
  NextArrowButton,
  Platinum_Cart_bg,
  PrevArrowButton,
  Tick,
  Trend,
} from "@/libs/SVG";
import Image from "next/image";
import { MainButton } from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

interface ReachDataType {
  accounts: string;
  followers: string;
  non_followers: string;
}
const ReachData: ReachDataType = {
  accounts: "526.67K",
  followers: "83.78K",
  non_followers: "442.89K",
};

interface StateDataType {
  followers: string;
  percent: string;
}
const StateData: StateDataType = {
  followers: "46.8K",
  percent: "32.7%",
};

interface CartType {
  type: string;
  title: string;
  description: string;
  start_value: string;
  current_value: string;
  bg: JSX.Element;
}

const HeroUserImages = [
  "/img/hero_user_0.png",
  "/img/hero_user_1.png",
  "/img/hero_user_2.png",
  "/img/hero_user_3.png",
  "/img/hero_user_4.png",
];

const HeroUserImages_1 = [
  "/img/hero_user_0.png",
  "/img/hero_user_0.png",
  "/img/hero_user_0.png",
  "/img/hero_user_0.png",
];

const HeroUserImages_2 = [
  "/img/hero_user_6.png",
  "/img/hero_user_6.png",
  "/img/hero_user_6.png",
  "/img/hero_user_6.png",
];

export default function Hero() {
  function AddCartHandleClick() {
    return;
  }
  return (
    <section className="w-full bg-gradient-to-br from-[#E8FFF5] to-[#FFFFFF] mb-[24px]">
      <div className="max-w-[1440px] w-full xl:p-[70px] xl:mx-auto flex xl:flex-row flex-col xl:items-start xl:justify-between relative">
        <Image
          src="/img/dot_bg.png"
          width={750}
          height={850}
          alt="dot_background"
          className="absolute top-[60px] opacity-20"
        />
        <div className="xl:w-[610px] w-full flex flex-col xl:gap-[25px] mb-[24px] xl:mb-0">
          <div className="w-full relative">
            <Swiper
              navigation={{
                prevEl: ".custom-swiper-button-prev",
                nextEl: ".custom-swiper-button-next",
              }}
              modules={[Navigation]}
            >
              {HeroUserImages_1.map((item, index) => (
                <SwiperSlide
                  className="!hidden !xl:block z-10 xl:rounded-[30px]"
                  key={index}
                >
                  <Image
                    src={item}
                    width={610}
                    height={610}
                    alt="hero_img_1"
                    className="xl:rounded-[30px] xl:w-[610px] xl:h-[610px] size-full aspect-[1]"
                  />
                </SwiperSlide>
              ))}
              {HeroUserImages_2.map((item, index) => (
                <SwiperSlide
                  className="xl:hidden z-10 xl:rounded-[30px]"
                  key={index}
                >
                  <Image
                    src={item}
                    width={402}
                    height={292}
                    alt="hero_img_1"
                    className="xl:rounded-[30px] size-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <ReachCard
              data={ReachData}
              className="absolute top-[32px] right-[-32px] z-20 hidden xl:block"
            />
            <StateCard
              data={StateData}
              className="absolute bottom-[20px] left-[20px] z-20"
            />
            <button className="custom-swiper-button-next cursor-pointer absolute top-[calc(50%-20px)] right-[15px] z-20">
              {NextArrowButton}
            </button>
            <button className="custom-swiper-button-prev cursor-pointer absolute top-[calc(50%-20px)] left-[15px] z-20">
              {PrevArrowButton}
            </button>
          </div>
          <div className="xl:hidden w-full flex justify-between items-center bg-black mb-[12px] px-2">
            <div className="flex gap-1 items-center">
              {Key_Svg}
              <p className="font-satoshi font-normal text-[14px] leading-[12px] text-white/50">
                No Password Requied
              </p>
            </div>
            <div className="flex gap-1 items-center">
              {Delivery}
              <p className="font-satoshi font-normal text-[14px] leading-[12px] text-white/50">
                Delivery Starts Instantly
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-[14px] relative overflow-hidden">
            <Swiper
              slidesPerView="auto"
              spaceBetween={14}
              loop={true}
              speed={3000}
              modules={[FreeMode, Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              freeMode={{ enabled: true, momentum: false }}
              allowTouchMove={false}
              simulateTouch={false}
              className="mySwiper"
            >
              {HeroUserImages.map((item, index) => (
                <SwiperSlide className="!w-[88px] xl:!w-[150px]" key={index}>
                  <Image
                    src={item}
                    width={150}
                    height={150}
                    alt="user_image"
                    className="rounded-[12px] size-full aspect-[1]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-[40px] h-full absolute right-0 bg-gradient-to-l from-white to-white/0 z-20" />
          </div>
        </div>
        <div className="flex flex-col items-center w-full xl:w-[600px] px-4">
          <div className="w-full flex items-center justify-center xl:justify-start gap-[10px] py-[10px] px-3 mb-4">
            <div className="flex gap-[5px]">
              {[...new Array(5)].map((_, index) => (
                <Image
                  src="/img/star.png"
                  width={24}
                  height={24}
                  alt="star"
                  key={index}
                  className="xl:size-[24px] size-[16px]"
                />
              ))}
            </div>
            <p className="font-satoshi font-bold text-[10px] xl:text-[15px] leading-[20px] text-black">
              4.8/5
              <span className="text-black/60 font-medium">
                {" "}
                from 3,637 Reviews
              </span>
            </p>
          </div>
          <h1 className="w-full font-h1 mb-4">
            Grow Your <br />
            Instagram Followers
          </h1>
          <p className="w-full font-satoshi font-normal xl:text-[24px] text-[16px] xl:leading-[17px] leading-[11px] xl:text-start text-center tracking-[-1px] text-text-dark mb-6">
            Affordable, Accelerated, Organic Instagram Growth.
          </p>
          <div className="hidden xl:flex gap-2 mb-5 w-full">
            <div className="w-[232px] flex gap-2 items-center">
              {Key_Svg}
              <p className="font-satoshi font-normal text-[16px] leading-[12px] text-text-dark text-start">
                No Password Requied
              </p>
            </div>
            <div className="flex gap-2 items-center">
              {Delivery}
              <p className="font-satoshi font-normal text-[16px] leading-[12px] text-text-dark text-start">
                Delivery Starts Instantly
              </p>
            </div>
          </div>
          <div className="hidden xl:flex gap-2 mb-2 w-full">
            <div className="w-[232px] flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark text-start">
                Engaged, Organic Followers
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark text-start">
                Finally get taken seriously in Social media
              </p>
            </div>
          </div>
          <div className="hidden xl:flex gap-2 mb-10 w-full">
            <div className="w-[232px] flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark text-start">
                Hands Off For You
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="size-6 flex items-center justify-center">
                <div className="size-3 bg-primary rounded-full" />
              </div>
              <p className="font-satoshi font-normal text-[14px] leading-[10px] text-text-dark text-start">
                Join the 49% of influencers who already do this
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between items-end mb-6">
            <Cart
              type="gold"
              title="GOLD"
              description="500-1k Followers"
              start_value="$129"
              current_value="$79"
              bg={Golden_Cart_bg}
            />
            <Cart
              type="platinum"
              title="Platinum"
              description="7.5-12k Followers"
              start_value="$149"
              current_value="$99"
              bg={Platinum_Cart_bg}
            />
            <Cart
              type="diamond"
              title="Diamond"
              description="2-5k Followers"
              start_value="$139"
              current_value="$89"
              bg={Diamond_Cart_bg}
            />
          </div>
          <MainButton
            title="Add to Cart"
            className="w-full mb-[15px]"
            handleClick={() => AddCartHandleClick()}
          />
          <Image
            src="/img/payments.png"
            width={380}
            height={25}
            alt="payment_methods"
            className="mb-[15px] self-center xl:w-[380px] xl:h-[25px] w-[300px] h-[20px]"
          />
          <div className="xl:w-[316px] h-[40px] xl:py-[12px] xl:px-[18px] p-[2px] xl:border-[3px] border-[1.5px] border-black-border rounded-[8px] flex items-center justify-between self-center">
            <Image
              src="/img/golden_mark.png"
              width={32}
              height={32}
              alt="golden_mark"
              className="xl:size-[32px] size-[24px]"
            />
            <p className="font-satoshi font-medium text-[11px] xl:text-[15px] leading-[8px] xl:leading-[11px] text-black uppercase tracking-[-1px]">
              Guaranteed Results or it&#39;s free!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReachCard({
  data,
  className,
}: {
  data: ReachDataType;
  className: string;
}) {
  return (
    <div
      className={`w-[270px] h-[164px] bg-white rounded-[12px] shadow-md font-inter p-3 border border-black-border ${className}`}
    >
      <div className="w-full h-full flex flex-col items-center justify-between">
        <p className="w-full text-black font-bold text-[13.6px] text-start">
          Reach
        </p>
        <p className="text-black font-semibold text-[20px] leading-[15px]">
          {data.accounts}
        </p>
        <p className="text-black font-medium text-[11px]">Accounts Reached</p>
        <div className="flex gap-[15px] items-center">
          <div className="flex flex-col gap-1">
            <p className="text-black font-bold text-[13.6px] leading-[10px]">
              {data.followers}
            </p>
            <p className="text-black font-medium text-[9px] opacity-50">
              Followers
            </p>
          </div>
          <ReachProgress percent={83780 / 526670} />
          <div className="flex flex-col gap-1">
            <p className="text-black font-bold text-[13.6px] leading-[10px]">
              {data.non_followers}
            </p>
            <p className="text-black font-medium text-[9px] opacity-50">
              Non-followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReachProgress({ percent }: { percent: number }) {
  const size = 60;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - percent * circumference;

  return (
    <svg
      width={size}
      height={size}
      className="block"
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        className="stroke-[#0693F7]"
        strokeWidth={strokeWidth}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
      />
      <circle
        className="stroke-[#0B3062] transition-all duration-500"
        strokeWidth={strokeWidth}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="butt"
        style={{ transition: "stroke-dashoffset 0.5s" }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

function StateCard({
  data,
  className,
}: {
  data: StateDataType;
  className: string;
}) {
  return (
    <div
      className={`xl:w-[223px] xl:h-[124px] w-[156px] h-[86px] bg-white rounded-[8.5px] xl:rounded-[12px] shadow-md font-inter px-[11px] py-2 xl:px-4 xl:py-3 flex flex-col gap-[14px] xl:gap-[5px] border border-black-border ${className}`}
    >
      <div className="flex items-center gap-[14px] xl:gap-[5px]">
        <Image
          src="/img/icons_instagram.png"
          width={20}
          height={20}
          alt="instagram_icon"
          className="xl:size-[20px] size-[14px]"
        />
        <p className="font-satoshi font-medium text-[10px] leading-[7px] xl:text-[14px] xl:leading-[10px] text-black">
          Instagram Followers
        </p>
      </div>
      <div className="h-full flex items-center">
        <div className="flex flex-col h-full justify-between">
          <div className="flex w-full items-end">
            <p className="font-satoshi font-bold text-[28px] leading-[20px] xl:text-[40px] xl:leading-[30px] text-black">
              {data.followers}
            </p>
            {Trend}
            <p className="font-satoshi font-medium text-[11px] xl:text-[16px] text-primary">
              {data.percent}
            </p>
          </div>
          <p className="font-satoshi font-medium text-[10px] leading-[7px] xl:text-[14px] xl:leading-[20px] opacity-50 text-black">
            Last 7 days
          </p>
        </div>
      </div>
    </div>
  );
}

function Cart({
  type,
  title,
  description,
  start_value,
  current_value,
  bg,
}: CartType) {
  return (
    <div className="xl:w-[187px] w-[115px]">
      {type == "platinum" && (
        <div className="w-full h-[30px] mb-[-10px] xl:rounded-t-[16px] rounded-t-[10px] xl:border-[3px] border-[1.5px] border-b-transparent border-black-border font-clash text-[12.4px] font-semibold leading-[15px] text-black text-center">
          Best Value
        </div>
      )}
      <div className="xl:rounded-[16px] rounded-[10px] xl:border-[3px] border-[1.5px] border-black-border shadow-md overflow-hidden">
        <div
          className={`relative xl:size-[181px] size-[109px] ${
            type == "platinum" &&
            "bg-primary xl:border-[3px] border-[1.5px] border-primary xl:rounded-[16px] rounded-[10px] overflow-hidden"
          }`}
        >
          <div className="realative w-full h-full xl:p-2 p-1 z-20 flex flex-col justify-between items-center">
            <div
              className={`absolute xl:size-[22px] size-[14px] top-1 right-1 xl:top-2 xl:right-2 ${
                type == "platinum" ? "flex" : "hidden"
              }`}
            >
              {Tick}
            </div>
            <p
              className={`font-clash font-semibold xl:text-[21px] text-[13px] text-center ${
                type == "platinum" ? "text-white" : "text-black"
              }`}
            >
              {title}
            </p>
            <p className="font-clash font-semibold xl:text-[24px] text-[15px] leading-[15px] xl:leading-[25px] text-white text-center z-20">
              {description}
            </p>
            <div className="relative w-full py-[5px] xl:py-2 flex items-center justify-center bg-white border border-black-border rounded-[8px] z-20">
              <p className="font-clash font-semibold text-[18px] leading-[22px] xl:text-[28px] xl:leading-[34px] text-black">
                {current_value}
              </p>
              <p className="absolute xl:top-[6.5px] xl:right-[12px] top-[4px] right-[6px] font-clash font-semibold text-[9px] leading-[11px] xl:text-[14.24px] xl:leading-[18px] text-black opacity-40">
                {start_value}
              </p>
            </div>
          </div>
          <div className="absolute xl:bottom-[-10px] bottom-[-3px] xl:w-[187px] aspect-[187/144] w-full z-10">
            {bg}
          </div>
        </div>
      </div>
    </div>
  );
}
