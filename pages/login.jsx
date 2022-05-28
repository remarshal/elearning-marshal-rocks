const login = () => {
  return (
    <div>
      <h1 className="jumbotron bg-danger text-center">Login</h1>
      <div className="container col-md-4 offset-md-4">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Let Me In</button>
        </form>
      </div>
    </div>
  );
};

export default login;
