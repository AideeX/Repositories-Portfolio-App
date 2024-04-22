import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function RepositoryDetails() {
  const { repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/repos/AideeX/${repoName}`)
      .then(response => {
        setRepoDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, [repoName]);

  if (!repoDetails) {
    return <div>Assembling the bits and bytes...</div>;
  }

  return (
    <div className='details-container'>
      <Link className="button-link" to="/">Reverse</Link>
      <h2>{repoDetails.name}</h2>
      <p>{repoDetails.description}</p>
      <table>
        <tr>
          <th>Stars</th><td>{repoDetails.stargazers_count}</td>
        </tr>
        <tr>
          <th>Forks</th><td>{repoDetails.forks_count}</td>
        </tr>
        <tr>
          <th>Open Issues</th><td>{repoDetails.open_issues_count}</td>
        </tr>
        <tr>
          <th>Watchers</th><td>{repoDetails.watchers_count}</td>
        </tr>
        <tr>
          <th>Repo Size</th><td>{repoDetails.size}</td>
        </tr>
        <tr>
          <th>Default Branch</th><td>{repoDetails.default_branch}</td>
        </tr>
        <tr>
          <th>Language</th><td>{repoDetails.language}</td>
        </tr>
        <tr>
          <th>Created at</th><td>{new Date(repoDetails.created_at).toLocaleDateString()}</td>
        </tr>
        <tr>
          <th>Last updated</th><td>{new Date(repoDetails.updated_at).toLocaleDateString()}</td>
        </tr>
      </table>
      <a href={repoDetails.html_url} target="_blank" rel="noopener noreferrer">Explore More</a>
    </div>
  );
}

export default RepositoryDetails;