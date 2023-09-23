import { useEffect, useState } from "react";
import DisplayJobCategory from "../DiplayJobCategory/DisplayJobCategory";

const JobCategory = () => {
    const [jobsCategories, setJobsCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setJobsCategories(data))
    }, [])
    return (
        <div>
            <h2 className='my-h2'>Job Category List</h2>
            <p className='my-p-style'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid mb-8 gap-6 md:grid-cols-4 sm:grid-cols-2 justify-evenly items-center'>
                {
                    jobsCategories.map(category => <DisplayJobCategory key={category.id} category={category} ></DisplayJobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;