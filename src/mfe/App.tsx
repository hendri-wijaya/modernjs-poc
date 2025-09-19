import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import RedirectButton from './RedirectButton';
import RemoteAuth from './RemoteAuth';

const App = () => {
  const [authSuccess, setAuthSuccess] = useState(false);

  const handleAuthSuccess = () => {
    setAuthSuccess(true);
  };

  return (
    <div>
      <h1>Shell Application</h1>
      {!authSuccess ? (
        <RemoteAuth onAuthSuccess={handleAuthSuccess} />
      ) : (
        <RedirectButton />
      )}
      <Outlet />
    </div>
  );
};

export default App;
