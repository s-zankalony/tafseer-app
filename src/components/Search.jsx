const Search = () => {
  return (
    <div className="m-4 p-4">
      <form className="flex flex-row -mx-2">
        <input
          type="search"
          name="search"
          id="search"
          className="appearance-none shadow rounded-md ring-1 ring-green-400 leading-5 sm:text-sm border border-transparent py-2 m-1 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white "
        />
        <button
          type="submit"
          className="bg-green-800 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 m-1 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Search;
