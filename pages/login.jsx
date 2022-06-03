const login = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.table({ firstName, email, password, checkbox });
  // };

  return (
    <div>
      <h1 className="jumbotron bg-danger text-center">Login</h1>
      <div className="container col-md-4 offset-md-4">
        <form>
          <div className="mb-3">
            <label for="email" className="form-label">Email address*</label>
            {/* <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={event => setEmail(event.target.value)} required /> */}
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password*</label>
            {/* <input type="password" className="form-control" value={password} onChange={event => setPassword(event.target.value)} required /> */}
          </div>
          <button type="submit" className="btn btn-primary">Let Me In</button>
        </form>
      </div>
    </div>
  );
};

export default login;
