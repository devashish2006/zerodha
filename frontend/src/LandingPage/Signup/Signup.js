import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Zerodha</h1>
        <p>Open an account with us to start trading.</p>
        <Link to="http://localhost:3001/signup" className="btn btn-primary btn-lg">
          Signup
        </Link>
        
        {/* Already have an account? */}
        <div className="mt-4">
          <p>Already have an account?</p>
          <Link to="http://localhost:3001/login" className="btn btn-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
