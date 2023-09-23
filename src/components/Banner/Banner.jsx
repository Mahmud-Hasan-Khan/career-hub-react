
const Banner = () => {
    return (
        <div className='flex flex-col-reverse justify-around items-center px-28 py-6 my-bg-color gap-16 sm:flex-row'>
            <div className='space-y-4'>
                <h1 className='text-7xl font-bold'>One Step <br /> Closer To Your <br /> <span className='my-gradient-color'>Dream Job</span></h1>
                <p className='text-lg font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='my-btn'>Get Started</button>

            </div>
            <div>
                <img src="/user.png" alt="" className="w-full object-cover object-center" />
            </div>
        </div>
    );
};

export default Banner;