const register = () => {
  return (
    <div>
      <h1 className="jumbotron bg-danger text-center">Register</h1>
      <div className="container col-md-4 offset-md-4">
        <form>
          <div className="mb-3">
            <label for="firstName" className="form-label">First name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="newsletterCheck">Yes!  Sign me up for the newsletter!</label>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
          <div className="form-text">I'll never share your information because I'm not a jerk.</div>
        </form>
      </div>
    </div>
  );
};

export default register;
