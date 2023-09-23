import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className='flex flex-col justify-around items-center mx-auto py-4 my-bg-color sm:flex-row '>
            <div>
                <Link to='/'><h1 className='text-4xl font-extrabold my-gradient-color'>JobSearcher</h1></Link>
            </div>
            <div>
                <nav className='space-x-10 font-bold'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'my-gradient-color' : '')}>Home</NavLink>
                    <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'my-gradient-color' : '')}>Statistics</NavLink>
                    <NavLink to='/appliedJobs' className={({ isActive }) => (isActive ? 'my-gradient-color' : '')}>Applied Jobs</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'my-gradient-color' : '')}>Blog</NavLink>
                </nav>
            </div>
            <div>
                <button className='my-btn'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;
