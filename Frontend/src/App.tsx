import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './store/store';
import HomePage from './pages/home.page';
import SignUpPage from './pages/sign-up.page';
import LoginPage from './pages/login-page';
import { TOKENS } from './config/tokens.config';

function App() {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  return (
    <>
      <Router>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path={TOKENS.routes.home} element={<HomePage />} />
              <Route path={TOKENS.routes.wildCard} element={<Navigate to={TOKENS.routes.home} />} />
            </>
          ) : (
            <>
              <Route path={TOKENS.routes.signUp} element={<SignUpPage />} />
              <Route path={TOKENS.routes.login} element={<LoginPage />} />
              <Route
                path={TOKENS.routes.wildCard}
                element={<Navigate to={TOKENS.routes.signUp} />}
              />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
