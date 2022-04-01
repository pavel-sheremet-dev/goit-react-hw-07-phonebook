// import { lazy, Suspense } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { navRoutes, privateRoutes } from 'routes/routes';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import NotFoundPage from 'pages/NotFoundPage';

// const { home, contacts, signUp, signIn } = navRoutes;
const { signUp, signIn } = navRoutes;
const { contacts } = privateRoutes;

console.log('signUp', signUp);

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={contacts.path} element={<ContactsPage />} />
        <Route path={signUp.path} element={<SignUpPage />} />
        <Route path={signIn.path} element={<SignInPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default Main;
