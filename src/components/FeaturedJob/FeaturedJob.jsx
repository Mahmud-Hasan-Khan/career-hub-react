
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

const FeaturedJob = ({ job }) => {
    console.log(job);
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className='rounded-lg border border-[#E8E8E8] justify-around pl-10'>
            <img src={logo} alt="" className='object-cover pt-10' />
            <h3 className='text-2xl font-extrabold text-[#474747] pb-2'>{job_title}</h3>
            <p className='text-xl text-[#757575] font-semibold '>{company_name}</p>
            <div className='flex space-x-4 py-4'>
                <p className='text-base font-extrabold border-2 border-[#b8a0f8] py-2 px-2 rounded-md my-gradient-color'>{remote_or_onsite}</p>
                <p className='text-base font-extrabold border-2 border-[#b8a0f8] py-2 px-2 rounded-md my-gradient-color'>{job_type}</p>
            </div>
            <div className='flex space-x-4 pb-4'>
                <p className='text-xl flex items-center gap-1 font-semibold text-[#757575] '><MapPinIcon className="h-5 w-5 text-[#757575]" />
                    {location}</p>
                <p className='text-xl flex items-center gap-1 font-semibold text-[#757575] '><CurrencyDollarIcon className="h-5 w-5 text-[#757575]" />
                    Salary : {salary}</p>
            </div>
            <button className='my-btn mb-4'>Show All</button>
        </div>
    );
};

export default FeaturedJob;