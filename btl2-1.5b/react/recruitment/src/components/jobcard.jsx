import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./jobcard.css";

const JobCard = ({job, onClick, onEdit, onDelete}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  
  return (
    <div className="job-card" onClick={onClick}>
      <h3>{job.jobName}</h3>
      <p>Ngày đăng {new Date(job.postDate).toLocaleDateString()}</p>
      <p>Trạng thái: {job.jobStatus}</p>
      <FaEdit className="edit-icon" onClick={onEdit}/>
      <FaTrash className="trash-icon" onClick={onDelete}/>

      {expanded && (
        <div className="job-details">
          <p>Loại hình: {job.jobType}</p>
          <p>Hình thức hợp đồng: {job.contractType}</p>
          <p>Cấp bậc: {job.level}</p>
          <p>Số lượng tuyển: {job.quantity}</p>
          <p>Lương: {job.salaryFrom.toLocaleString()} - {job.salaryTo.toLocaleString()} VNĐ</p>
          <p>Kinh nghiệm yêu cầu: {job.requireExpYear} năm</p>
          <p>Địa điểm: {job.location}</p>
          <p>Mô tả: {job.jobDescription}</p>
          <p>Hạn nộp: {new Date(job.expireDate).toLocaleDateString()}</p>
        </div>
      )}
    </div>      
  );
};

export default JobCard;
