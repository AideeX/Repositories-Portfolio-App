import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Filter = ({ repos, searchTerm }) => {
  const filteredRepos = repos ? repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="grid">
      {filteredRepos.length > 0 ? (
        filteredRepos.map((repo) => (
          <div key={repo.name}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </div>
        ))
      ) : (
        <div>No repositories found</div>
      )}
    </div>
  );
};

Filter.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
};

export default Filter;