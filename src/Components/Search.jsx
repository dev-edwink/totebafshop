import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <section className="w-full mx-auto px-5 py-4 mt-10">
      <div className="flex items-center max-w-[726px] mx-auto rounded-lg overflow-hidden shadow">
        <div className="bg-[#001616] w-[65px] h-[60px] flex items-center justify-center text-white text-xl">
          <IoSearch />
        </div>
        <div className="flex-1">
          <input
            type="search"
            placeholder="search for your favourite totebag, colour, design patterns"
            className="w-full h-[60px] px-4 outline-none bg-[#FFFFFF]"
          />
        </div>
        
      </div>

      
    </section>
  );
}

export default Search;