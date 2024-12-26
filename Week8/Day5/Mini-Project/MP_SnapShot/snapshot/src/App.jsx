import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import SearchBar from './components/SearchBar'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Always render the search bar */}
        <SearchBar />  {/* The search bar will always be visible */}

        {/* Main content area below the search bar */}
        <div className="main-content">
          <Routes>
            {/* HomePage is always visible as the base route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Category Pages */}
            <Route path="/mountain" element={<CategoryPage category="mountain" />} />
            <Route path="/beaches" element={<CategoryPage category="beaches" />} />
            <Route path="/birds" element={<CategoryPage category="birds" />} />
            <Route path="/food" element={<CategoryPage category="food" />} />

            {/* SearchPage */}
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;





