import images from "@/app/assets/images";
import svgs from "@/app/assets/svgs";
import FooterItem from "@/app/components/layout/Footer/FooterItem";
import ScrollTop from "@/app/components/layout/Footer/ScrollToTop";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="relative max-w-[1920px] w-full mx-auto px-[240px] h-[463.67px]"
      style={{
        backgroundImage: `url(${images.footer.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full py-[96px] flex justify-between">
        <div className="flex flex-col gap-[32px]">
          <h1 className="text-[20px] leading-[24px] font-semibold text-brand_800">
            Viet Hung Auto Production Trading Joint Stock Company
          </h1>
          <div className="flex flex-col gap-[4px]">
            <FooterItem label="Tax code: " title="0305094228" />
            <FooterItem
              label="Address: "
              title="13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam."
            />
            <FooterItem label="Phone number: " title="0283 760 7607" />
            <FooterItem
              label="Opening hour: "
              title="9:00 - 22:00 from Mon - Fri"
            />
          </div>
          <Image
            src={images.boCongThuong}
            width={200}
            height={75.67}
            alt="bo cong thuong"
          />
        </div>

        <div className="flex flex-col gap-[32px]">
          <h1 className="text-[24px] leading-[30px] font-semibold text-brand_800">
            Sitemap
          </h1>
          <div className="flex flex-col gap-[12px]">
            <FooterItem label="About" />
            <FooterItem label="Article" />
            <FooterItem label="Cart" />
            <FooterItem label="Contact" />
          </div>
        </div>

        <div className="flex flex-col gap-[32px]">
          <h1 className="text-[24px] leading-[30px] font-semibold text-brand_800">
            Legal
          </h1>
          <div className="flex flex-col gap-[12px]">
            <FooterItem
              label={
                <span className="flex items-center gap-[4px] font-semibold text-[16px] leading-[28px] text-text_primary">
                  <span className="border-b-[1.5px] border-text_primary w-[16px] translate-y-[4px]" />{" "}
                  Privacy policy
                </span>
              }
              labelClassName="!text-text_primary !font-semibold !text-[16px] !leading-[28px]"
            />
            <FooterItem label="Cookie policy" />
            <FooterItem label="Delivery policy" />
            <FooterItem label="FAQs" />
          </div>
        </div>

        <div className="flex flex-col gap-[32px]">
          <h1 className="text-[24px] leading-[30px] font-semibold text-brand_800">
            Download App
          </h1>
          <div className="flex flex-col gap-[12px]">
            <button className="flex items-center gap-[17px] rounded-[12px] p-[18px_20px] h-[64px] w-[230px] bg-text_primary">
              <Image
                src={svgs.playStoreFill}
                width={30}
                height={30}
                alt="store"
              />
              <div className="text-white flex flex-col items-start">
                <p className="text-[14px] font-normal leading-[20px]">
                  Get It On
                </p>
                <p className="font-semibold text-[16px] leading-[24px]">
                  Google Play Store
                </p>
              </div>
            </button>

            <button className="flex items-center gap-[17px] rounded-[12px] p-[18px_20px] h-[64px] w-[230px] bg-brand_500">
              <Image
                src={svgs.appleBrand}
                width={36}
                height={36}
                alt="apple brand"
              />
              <div className="text-white flex flex-col items-start">
                <p className="text-[14px] font-normal leading-[20px]">
                  Download from
                </p>
                <p className="font-semibold text-[16px] leading-[24px]">
                  Apple App Store
                </p>
              </div>
            </button>
          </div>
          <div className="flex items-center gap-[8px] justify-end cursor-pointer">
            <Image
              src={images.countryVN}
              width={36}
              height={36}
              alt="country"
            />
            <p className="font-medium text-[20px] leading-[16px] text-text_primary">
              VI
            </p>
            <Image
              src={svgs.arrowCountry}
              width={9.33}
              height={4}
              alt="arrow"
            />
          </div>
        </div>
      </div>

      <ScrollTop />
    </div>
  );
};

export default Footer;
