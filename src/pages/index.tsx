import SajuContainer from "@/components/sajuContainer";
import Image from "next/image";

const Home = () => {
  const backgroundImage = "/background.png";
  const speechBubbleImage1 = "/speech-bubble1.png";
  const speechBubbleImage2 = "/speech-bubble2.png";

  return (
    <main className="mx-auto w-screen min-w-80 max-w-md">
      <div className="relative w-full min-w-80 max-w-md">
        {/* 배경 이미지 */}
        <Image
          src={backgroundImage}
          alt="배경 이미지"
          width={448}
          height={2081}
          priority
          loading="eager"
        />

        {/* 첫번째 말풍선 */}
        <div className="absolute left-[-2%] top-[28.8%] w-[75%]">
          <div className="relative aspect-[215/139] w-full">
            <Image
              src={speechBubbleImage1}
              alt="말풍선 이미지 1"
              fill
              className="object-contain"
              priority
              style={{ zIndex: 10 }}
            />
            <div className="absolute left-[27%] top-[34%] z-20 flex w-fit flex-col items-center justify-center text-center text-[clamp(0.9rem,4.5vw,1.25rem)] leading-normal text-black">
              <p>이제 본격적으로</p>
              <p>OO님의 사주팔자를</p>
              <p>분석해볼 차례네요.</p>
            </div>
          </div>
        </div>

        {/* 두번째 말풍선 */}
        <div className="absolute left-[-2%] top-[47%] w-[80%]">
          <div className="relative aspect-[239/139] w-full">
            <Image
              src={speechBubbleImage2}
              alt="말풍선 이미지 1"
              fill
              className="object-contain"
              priority
              style={{ zIndex: 10 }}
            />
            <div className="absolute left-[21%] top-[28%] z-20 flex w-fit flex-col items-center justify-center text-center text-[clamp(0.9rem,4.5vw,1.25rem)] leading-normal text-black">
              <p>제가 oo님의 사주를</p>
              <p>보기 쉽게 표로 정리했어요.</p>
            </div>
          </div>
        </div>

        {/* 사주팔자 컴포넌트 */}
        <SajuContainer />
      </div>
    </main>
  );
};

export default Home;
