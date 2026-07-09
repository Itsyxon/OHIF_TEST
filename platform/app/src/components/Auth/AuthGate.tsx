import React, { useState } from 'react';
import Login from './Login';
import { isAuthenticated } from './session';

type AuthGateProps = {
  children: React.ReactNode;
};

function AuthGate({ children }: AuthGateProps) {
  const [authenticated, setAuthenticated] = useState(() => isAuthenticated());

  if (!authenticated) {
    return <Login onSuccess={() => setAuthenticated(true)} />;
  }

  return <>{children}</>;
}

export default AuthGate;
