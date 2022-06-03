import { useState } from 'react';
import axios from 'axios';

const register = () => {
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    // console.table({ firstName, email, password, checkbox });
    const { data } = await axios.post(`http://localhost:8000/api/register`, {firstName, email, password, checkbox});
    console.log("REGISTER RESPONSE", data);
  }

  return (
    <div>
      <h1 className="jumbotron bg-danger text-center">Register</h1>
      <div className="container col-md-4 offset-md-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="firstName" className="form-label">First name*</label>
            <input type="text" className="form-control" value={firstName} onChange={event => setFirstname(event.target.value)} required />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email address*</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={event => setEmail(event.target.value)} required />

          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password*</label>
            <input type="password" className="form-control" value={password} onChange={event => setPassword(event.target.value)} required />
          </div>
          <div className="mb-3 form-check">
            <label for="newsletter" className="form-check-label">Yes!  Sign me up for the newsletter!</label>
            <input type="checkbox" className="form-check-input" value={newsletter} onChange={event => setNewsletter(event.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
          <div className="form-text">I'll never share your information because I'm not a jerk.</div>
        </form>
      </div>
    </div>
  );
};

export default register;
