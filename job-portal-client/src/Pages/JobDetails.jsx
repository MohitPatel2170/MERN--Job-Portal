import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageHeader from '../components/PageHeader';

const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([])
    useEffect(() => {

    fetch(`http://localhost:5001/all-jobs/${id}`).then(res => res.json()).then (data => setJob(data))
    }, [])

    const handleApply = async() => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }

    }

  return (
    <div className='max-w-screen-2xl container justify-center'>
        <PageHeader title={"Single Job Page"} path={"Single Job"}/>
        <h2>JobDetails: {id}
        <h1>{job.jobTitle}</h1>

        <button className='bg-blue-500 px-8 text-white ' onClick={handleApply}>Apply Now</button>

        </h2>
    </div>
  )
}

export default JobDetails;