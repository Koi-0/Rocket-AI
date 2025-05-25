import Image from "next/image";
import SajuTable from "./sajuTable";

const SajuContainer = () => {
  return (
    <div className="absolute bottom-20 left-1/2 h-[621px] w-[351px] translate-x-[-50%]">
      <Image
        src={"/saju.image.png"}
        alt="사주팔자 배경 이미지"
        width={351}
        height={621}
        style={{ objectFit: "contain" }}
      />
      <SajuTable />
    </div>
  );
};

export default SajuContainer;
