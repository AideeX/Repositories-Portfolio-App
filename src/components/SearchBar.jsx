import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <div className="search-bar-container">
      <FaSearch id="search-icon" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search Repositories..."
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default SearchBar;