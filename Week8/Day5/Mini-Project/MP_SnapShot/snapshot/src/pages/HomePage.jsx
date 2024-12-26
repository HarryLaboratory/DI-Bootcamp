import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Snap Shot!</h1>
      <nav>
        <Link to="/mountain">Mountain</Link>
        <Link to="/beaches">Beaches</Link>
        <Link to="/birds">Birds</Link>
        <Link to="/food">Food</Link>
        <Link to="/search">Search</Link>
      </nav>
    </div>
  );
}

export default HomePage;
