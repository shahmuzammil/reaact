// App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import ProductDetails from '../components/ProductDetails';
import Contact from '../components/Contact';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Header from '../components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product-details" component={ProductDetails} />
        <Route path="/contact" component={Contact} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product-details">Product Details</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

// export default Header;

// ProductDetails.js
import React from 'react';

const ProductDetails = () => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

// export default ProductDetails;

// SignUp.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    axios
      .post('/api/sign-up', { username, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Confirm password:
          <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

// export default SignUp;

// SignIn.js
import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/sign-in', { username, password })
      .then((response)) = }
    }