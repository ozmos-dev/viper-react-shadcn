import { NavLink } from 'react-router';

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div>
        <div className="flex items-center justify-center gap-4">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
}
