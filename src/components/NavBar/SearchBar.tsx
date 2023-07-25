import "./SearchBar.css"
const SearchBar = () => {
  return (
    <>
      {/* <div className="input-group">
        <div className="form-outline">
          <input id="search-input" type="search" className="form-control" />
          <label className="form-label">Search</label>
        </div>
        <button id="search-button" type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div> */}
<div className="d-flex justify-content-between bg-nav pb-3">
<div className="d-flex mt-3  ml-5">
  <img src="/src/assets/images/season.png" id="logo"></img>
  <div className="ml-3  text-warning">
  <h1 ><i>WeatheR ForecasT</i></h1>
</div>
</div>

<nav className="navbar navbar-light mr-4 mt-3">
        
  
</nav>
</div>
      
    </>
  );
};
export default SearchBar;
