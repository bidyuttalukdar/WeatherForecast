import "./style.css";
const SearchBar = () => {
  return (
    <>
      <div className="d-flex justify-content-between bg-nav pb-2">
        <div className="d-flex mt-3  ml-5">
          <img src="/src/assets/images/season.png" id="logo"></img>
          <div className="ml-3  text-warning">
            <h1>
              <i>WeatheR ForecasT</i>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
