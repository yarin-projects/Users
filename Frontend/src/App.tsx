import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './store/store';
import HomePage from './pages/home.page';
import SignUpPage from './pages/sign-up.page';

function App() {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  return (
    <>
      <Router>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<Navigate to="/signup" />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
