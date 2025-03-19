import React from 'react';

const Home: React.FC = () => {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <div>
      {isAuthenticated ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>Please <a href="/signin">Sign In</a> or <a href="/login">Login</a> to access our services.</h2>
      )}
    </div>
  );
}

export default Home;
