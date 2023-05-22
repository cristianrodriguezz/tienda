import SearchIcon from "./icons/SearchIcon";

const Search = () => {
  return (
      <label className=" gap-1 hidden sm:flex">
        <SearchIcon />
        <input
          className="  bg-victoria-200 rounded-md placeholder:text-victoria-600 placeholder:px-2 text-victoria-600 font-medium px-2"
          type="text"
          placeholder="Buscar..."
        />
      </label>
  );
};

export default Search;
