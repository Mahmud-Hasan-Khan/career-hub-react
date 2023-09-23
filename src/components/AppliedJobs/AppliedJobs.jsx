import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredAppliedJob } from "../../utility/localStorage";
import DisplayAppliedJobs from "../DisplayAppliedJobs/DisplayAppliedJobs";


const AppliedJobs = () => {
    const appliedJobs = useLoaderData();
    const [foundAppliedJobs, setFoundAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = (filter) => {
        if (filter === 'All') {
            setDisplayJobs(foundAppliedJobs);
        }
        else if (filter === 'Remote') {
            const remoteJobs = foundAppliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'Onsite') {
            const onSiteJobs = foundAppliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onSiteJobs);
        }
    }

    useEffect(() => {
        const storedAppliedJobIds = getStoredAppliedJob();

        if (appliedJobs.length > 0) {
            const getAppliedJobs = [];
            for (const id of storedAppliedJobIds) {
                const job = appliedJobs.find(job => job.id === id);
                if (job) {
                    getAppliedJobs.push(job)
                }
            }
            setFoundAppliedJobs(getAppliedJobs);
            setDisplayJobs(getAppliedJobs);
            console.log(appliedJobs, storedAppliedJobIds, getAppliedJobs);
        }
    }, [appliedJobs]);

    return (
        <div>
            <h2 className='my-h2 mb-10'>Applied Jobs</h2>
            <div className="flex justify-end mr-40 mb-6">
                <details className="dropdown my-3">
                    <summary className="m-1 btn">Filter By <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></span> </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('All')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('Remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('Onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="space-y-6 w-3/4 mx-auto ">
                {displayJobs.map(jobs => <DisplayAppliedJobs key={jobs.id} jobs={jobs} ></DisplayAppliedJobs>)}
            </div>

        </div>
    );
};

export default AppliedJobs;