import { Outlet, NavLink } from 'react-router';

export function Layout() {

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '200px',
            padding:24
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/list">List</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/404">Not Found</NavLink>
        </nav>
      </div>
      <div>
        <h1>title</h1>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
