export const getStoredAppliedJob = () => {
    const storedAppliedJob = localStorage.getItem('applied-job');

    if (storedAppliedJob) {
        return JSON.parse(storedAppliedJob);
    }
    return [];
}

export const saveAppliedJob = (id) => {
    const storedAppliedJobs = getStoredAppliedJob();
    const exists = storedAppliedJobs.find(jobId => jobId === id);
    if (!exists) {
        storedAppliedJobs.push(id);
        localStorage.setItem('applied-job', JSON.stringify(storedAppliedJobs))
    }
}

// export default { getStoredAppliedJob, saveAppliedJob }