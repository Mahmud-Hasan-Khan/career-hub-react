import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    // by default show 4 data
    const [dataLength, SetDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <h2 className='my-h2'>Featured Jobs</h2>
            <p className='my-p-style'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid mb-8 gap-16 md:grid-cols-2 sm:grid-cols-1 justify-around items-center mx-20'>
                {
                    jobs.slice(0, dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div className="text-center">
                <button onClick={() => SetDataLength(jobs.length)} className={dataLength === jobs.length ? 'hidden' : 'my-btn mb-4'} >Show All</button>
            </div>
        </div >
    );
};

export default FeaturedJobs;