import { Button, Dropdown, Menu, Navbar } from 'react-daisyui';
import { Link, NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Navbar>
        <Navbar.Start>
          <Dropdown>
            <Button
              tag='label'
              color='ghost'
              tabIndex={0}
              className='lg:hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className='w-52 menu-sm mt-3 z-[1]'>
              <Dropdown.Item><Link to='/'>Home</Link></Dropdown.Item>
              <Dropdown.Item><Link to='/contact'>Contact</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link className='btn btn-ghost normal-case text-xl' to='/'>daisyUI</Link>
        </Navbar.Start>
        <Navbar.Center className='hidden lg:flex'>
          <Menu horizontal className='px-1'>
            <Menu.Item>
              <NavLink to='/'>Home</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to='contact'>Contact</NavLink>
            </Menu.Item>
          </Menu>
        </Navbar.Center>
        <Navbar.End>
          <Button tag='a'>Button</Button>
        </Navbar.End>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Layout;
