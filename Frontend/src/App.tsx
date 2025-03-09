import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/store';
import HomePage from './pages/home.page';
import SignUpPage from './pages/sign-up.page';
import LoginPage from './pages/login-page';
import { TOKENS } from './strings/tokens';
import { useEffect } from 'react';
import { verifyCurrentUser } from './store/slices/auth.slice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await dispatch(verifyCurrentUser());
      } catch (error) {
        console.error(error);
      }
    };
    checkAuth();
  }, [dispatch]);

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
