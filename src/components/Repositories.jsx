import { useState } from "react";
import { useQuery } from 'react-query';
import axios from "axios";
import NavBar from './NavBar';
import SearchBar from "./SearchBar";
import Filter from './Filter';
import  Pagination  from './Pagination';


async function fetchRepos(page) {
  const response = await axios.get(`https://api.github.com/users/AideeX/repos?page=${page}&per_page=6`);

  const linkHeader = response.headers.link;

  const totalCount = linkHeader && linkHeader.split(',')[1] 
  ? parseInt(linkHeader.split(',')[1].match(/&page=(\d+)>; rel="last"/)?.[1] || '0') 
  : page;

  return { repos: response.data, totalCount };
}

function Repositories() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading } = useQuery(['repos', page], () => fetchRepos(page), { keepPreviousData: true });
  const repos = data?.repos;
  const totalPages = data ? Math.ceil(data.totalCount / 6) : 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
        <SearchBar repos={repos} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid-container">
      <Filter repos={repos} searchTerm={searchTerm} />
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  );
}

export default Repositories;