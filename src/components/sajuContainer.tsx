import Image from "next/image";
import SajuTable from "./sajuTable";

const SajuContainer = () => {
  const sajuImage = "/saju.image.png";

  return (
    <div className="absolute bottom-[3%] left-1/2 w-[98%] translate-x-[-50%]">
      <div className="aspect-[351/621] w-full">
        <Image
          src={sajuImage}
          alt="사주팔자 배경 이미지"
          fill
          className="object-contain"
          priority
          style={{ zIndex: 10 }}
        />
      </div>
      <SajuTable />
    </div>
  );
};

export default SajuContainer;
