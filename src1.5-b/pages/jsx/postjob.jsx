import React from "react";
import JobCard from "../../components/jobcard.jsx";
import "../css/postjob.css";
import axios from "axios";
import JobModal from "./modal.jsx";
import DeleteConfirm from "./deleteConfirm.jsx";
import EditModal from "./editConfirm.jsx";
import JobDetailModal from "./jobDetail.jsx";
import { useEffect, useState} from "react";
import {getJobs, createJob, updateJob, deleteJob} from "../../api/jobApi.js";
import FilterModal from "./searchBySalaryAndDate.jsx";
import { searchJobs, getJobDetailById }from "../../api/getApi.js";
import SearchBar from "./searchspace.jsx";
const getTokenForTesting = async () => {
  try {
    const res = await axios.post("http://localhost:8080/api/auth/login", {
      username: "aiinnovators",
      password: "Password123",
      userType: "EMPLOYER"
    });

    const token = res.data.data.accessToken; 
    
    localStorage.setItem("token", token); 

    return token;
  } catch (err) {
    console.error("Đăng nhập thất bại:", err);
    return null;
  }
};

const PostedJobs = () => {
  const [jobs, setJobs] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [deleteIndex, setDeleteIndex] = React.useState(null);
  const [editingJob, setEditingJob] = React.useState(null);
  const [selectedJob, setSelectedJob] = React.useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    const fetchData = async () =>{
      const token = await getTokenForTesting();
      getJobs()
      .then((res) => {
        console.log("Kết quả từ API:", res); // 👈 thêm dòng này để debug
        setJobs(res.data.data || [])})
      .catch((err) => console.error("Lỗi lấy danh sách công việc:", err));
  };
    fetchData();
 }, []);

  const handleFilterJobs = async (filterParams) => {
    try {
      const datatemp = await searchJobs(filterParams);
      console.log("Kết quả lọc:", datatemp);
      setJobs(datatemp|| []);
    } catch (error) {
      console.error("Lỗi lọc công việc:", error);
      alert("Không tìm thấy kết quả.");
    }
  };

  const handleEditJob = (updatedJob) =>{
    updateJob(updatedJob.id, updatedJob)
    .then((res) => {
      const newJobs = jobs.map((job) => {
        job.id === updatedJob.id ? res.data : job
      });
      setJobs(newJobs);
      setEditingJob(null);
    })
    .catch((err) => console.error("Lỗi sửa công việc:", err));
  };
  
  const handleViewJob = async (job) => {
    try {
      const fullDetail = await getJobDetailById(job.jobId || job.jobID);
      setSelectedJob(fullDetail);
    } catch (error) {
      console.error("Lỗi lấy chi tiết công việc:", error);
      alert("Không tìm thấy chi tiết công việc.");
    }
  };  


  return (
      <div className="posted-jobs">
        <div className="pinned">
        <h2>Việc đã đăng</h2>
        <SearchBar onSearchResults={setJobs} />
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="filter-btn" onClick={() => setShowFilterModal(true)}>
            🔍 Lọc
          </button>
        <button className="add-job-btn" onClick={() => setShowModal(true)}>
          + Thêm công việc
        </button>
        </div>
      </div>
      <div className="navbar-divider"/>

      <div className="job-grid">
        {jobs.map((job, index) => (
          <JobCard 
          key={index} 
          job={job} 
          onEdit = {() =>setEditingJob({...job, index})}
          onClick={() => handleViewJob(job)}
          />
        ))}
      </div>

      {showModal && (
        <JobModal 
      onClose={() => setShowModal(false)}
      onSubmit={handleAddJob}
      />
      )}
      {deleteIndex !== null && (
        <DeleteConfirm
          onConfirm={handleDeleteJob}
          onCancel={() => setDeleteIndex(null)}
        />
      )}
      {editingJob && (
        <EditModal
          job={editingJob}
          onClose={() => setEditingJob(null)}
          onSubmit={(updated) =>{
            handleEditJob(updated);
          }}
        />
      )}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
      {showFilterModal && (
        <FilterModal
          onClose={() => setShowFilterModal(false)}
          onFilter={handleFilterJobs}
        />
      )}
    </div>
  );
};

export default PostedJobs;
