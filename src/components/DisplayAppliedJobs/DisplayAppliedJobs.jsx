import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

const DisplayAppliedJobs = ({ jobs }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, salary, location } = jobs;
    return (
        <div className='pb-10'>
            <div className="card card-side bg-base-100 shadow-xl border p-6">
                <figure className="w-[240px] h-[240px] bg-[#f4f4f4] p-11 rounded-lg"><img src={logo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title} </h2>
                    <p>{company_name}  </p>

                    <div className='flex space-x-4 py-4 w-1/2 text-center'>
                        <p className='text-base font-extrabold border-2 border-[#b8a0f8] py-2 px-2 rounded-md my-gradient-color'>{remote_or_onsite}</p>
                        <p className='text-base font-extrabold border-2 border-[#b8a0f8] py-2 px-2 rounded-md my-gradient-color'>{job_type}</p>
                    </div>
                    <div className='flex space-x-4 pb-4'>
                        <p className='text-xl flex items-center gap-1 font-semibold text-[#757575] '><MapPinIcon className="h-5 w-5 text-[#757575]" />
                            {location}</p>
                        <p className='text-xl flex items-center gap-1 font-semibold text-[#757575] '><CurrencyDollarIcon className="h-5 w-5 text-[#757575]" />
                            Salary : {salary}</p>
                    </div>

                </div>
                <div className="flex items-center">
                    <button className='my-btn mb-4'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayAppliedJobs;