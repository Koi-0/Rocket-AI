import SajuContainer from "@/components/sajuContainer";
import Image from "next/image";

const Home = () => {
  return (
    <main className="relative mx-auto w-full max-w-md bg-red-400">
      <div className="relative mx-auto h-[2081px] w-[375px]">
        {/* 배경 이미지 */}
        <Image src={"/background.png"} alt="이미지" width={375} height={2081} />

        {/* 첫번째 말풍선 */}
        <div className="text-md absolute left-[70px] top-[658px] inline-block text-black">
          <div className="flex flex-col items-center justify-center">
            <p>이제 본격적으로</p>
            <p>OO님의 사주팔자를</p>
            <p>분석해볼 차례네요.</p>
          </div>
        </div>

        {/* 두번째 말풍선 */}
        <div className="text-md absolute left-[62px] top-[1023px] inline-block text-black">
          <div className="flex flex-col items-center justify-center">
            <p>제가 oo님의 사주를</p>
            <p>보기 쉽게 표로 정리했어요.</p>
          </div>
        </div>

        {/* 사주팔자 컴포넌트 */}
        <SajuContainer />
      </div>
    </main>
  );
};

export default Home;
