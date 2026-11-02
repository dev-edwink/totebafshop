import { VscSettingsCompact } from "react-icons/vsc";

function Filter() {
  return (
    <section className="max-w-screen-full flex justify-center mx-auto px-5">
      <div className="max-w-[629px] mx-auto grid justify-items-center grid-cols-3 md:grid-cols-5 gap-[16px] mt-5 px-5">
        <div className="w-[101px] h-[56px] rounded-[30px] flex gap-[16px] items-center border justify-center hover:text-white hover:bg-black">
          <VscSettingsCompact />
          All
        </div>

        <div className="w-[101px] h-[56px] rounded-[30px] flex items-center border justify-center hover:text-white hover:bg-black">
          Corduroy
        </div>

        <div className="w-[101px] h-[56px] rounded-[30px] flex items-center border justify-center hover:text-white hover:bg-black">
          Denim
        </div>

        <div className="w-[101px] h-[56px] rounded-[30px] flex items-center border justify-center hover:text-white hover:bg-black">
          Adire
        </div>
        <div className="w-[101px] h-[56px] rounded-[30px] flex items-center border justify-center hover:text-white hover:bg-black">
          Leather
        </div>
      </div>
    </section>
  );
}

export default Filter;
