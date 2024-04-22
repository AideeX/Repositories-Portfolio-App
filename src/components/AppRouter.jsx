import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Repositories = lazy(() => import('./Repositories'));
const RepositoryDetails = lazy(() => import('./RepoView'));
const AboutMe = lazy(() => import('../pages/AboutMe'));
const ContactMe = lazy(() => import('../pages/ContactMe'));
const NotFoundPage = lazy(() => import('../pages/PageNotFound'));

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route  path="/Repositories" element={<Repositories />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route exact path="/" element={<Repositories />} />
        <Route path="/repo/:repoName" element={<RepositoryDetails />} />
      </Routes>
    </Suspense>
  )
  }
  
export default AppRouter;