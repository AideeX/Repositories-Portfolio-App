import { NavLink } from 'react-router-dom';
import lost from '../assets/error404.png';

function NotFoundPage() {
  return (
    <div className="not-found-container">
     <img src={lost} alt="Odunlade looking confused..." />
      <p>It may seem as though you have lost your way but who neva loss before? No worries though, this is the road that will lead you <NavLink to="/Repositories" activeClassName="active-link">Home</NavLink></p>
    </div>
  );
}
  
  export default NotFoundPage;