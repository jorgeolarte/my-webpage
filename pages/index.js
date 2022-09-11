import Image from "next/image";
import isotype from "../public/isotype-white.png";

export default function Home() {
  return (
    <div className='bg-gradient-to-l to-[#c621e5] from-[#720cd4] text-white flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center'>
        <div className='animate-[hearting_1s_ease-in-out_infinite]'>
          <Image src={isotype} width={200} height={200} alt='Jorge Olarte' />
        </div>
        <h1 className='text-xl'>Coming soon</h1>
      </div>
    </div>
  );
}
