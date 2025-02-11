import Image from "next/image";

export default function TopThreeBrowse() {
  return (
    <div className="max-sm:w-[358px] max-sm:h-[1075px] max-sm:left-[16px] w-[1239px] h-[866px] relative left-[100px] rounded-[40px] bg-[#d5dedb]">
      
      {/* Heading */}
      <div className="max-sm:left[0px] w-[687px] relative mt-[70px] h-[58px] text-[#000000]">
        <h3 className="max-sm:w-[246px] max-sm:h-[72px] max-sm:left-[56px] max-sm:mt-[10px] max-sm:pt-[40px] max-sm:text-[32px] max-sm:text-center font-bold text-center text-[48px] relative left-[276px] mt-[70px] pt-[70px]">
          BROWSE BY DRESS STYLE
        </h3>
      </div>

      {/* Images Grid */}
      <div className="max-sm:grid max-sm:pt-[108px] flex pt-[192px] relative rounded-[20px] flex-wrap justify-center gap-[20px]">
        
        {/* Casual */}
        <div className="relative w-[407px] h-[289px] max-sm:w-[310px] max-sm:h-[190px] rounded-[20px] overflow-hidden">
          <Image src="/image11.png" alt="Casual Dress" layout="fill" objectFit="cover" />
          <p className="absolute top-[25px] left-[16px] font-bold text-[36px] text-black">Casual</p>
        </div>

        {/* Formal */}
        <div className="relative w-[684px] h-[289px] max-sm:w-[310px] max-sm:h-[190px] rounded-[20px] overflow-hidden">
          <Image src="/image12.png" alt="Formal Dress" layout="fill" objectFit="cover" />
          <p className="absolute top-[25px] left-[16px] font-bold text-[36px] text-black">Formal</p>
        </div>

      </div>

      {/* Second Row */}
      <div className="max-sm:grid flex gap-[20px] relative mt-[20px] flex-wrap justify-center">
        
        {/* Party */}
        <div className="relative w-[684px] h-[289px] max-sm:w-[310px] max-sm:h-[190px] rounded-[20px] overflow-hidden">
          <Image src="/image13.png" alt="Party Dress" layout="fill" objectFit="cover" />
          <p className="absolute top-[25px] left-[16px] font-bold text-[36px] text-black">Party</p>
        </div>

        {/* Gym */}
        <div className="relative w-[407px] h-[289px] max-sm:w-[310px] max-sm:h-[190px] rounded-[20px] overflow-hidden">
          <Image src="/image14.png" alt="Gym Wear" layout="fill" objectFit="cover" />
          <p className="absolute top-[25px] left-[16px] font-bold text-[36px] text-black">Gym</p>
        </div>

      </div>

    </div>
  );
}
