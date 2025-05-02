import React from "react";
import "../css/jobDetailModal.css";

const JobDetailModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{job.jobName || job.title}</h2>
        <p><strong>Ngày đăng:</strong> {new Date(job.postDate).toLocaleDateString()}</p>
        <p><strong>Trạng thái:</strong> {job.jobStatus}</p>
        <p><strong>Loại hình:</strong> {job.jobType}</p>
        <p><strong>Hợp đồng:</strong> {job.contractType}</p>
        <p><strong>Cấp bậc:</strong> {job.level}</p>
        <p><strong>Số lượng:</strong> {job.quantity}</p>
        <p><strong>Lương:</strong> {job.salaryFrom.toLocaleString()} - {job.salaryTo.toLocaleString()} VNĐ</p>
        <p><strong>Kinh nghiệm yêu cầu:</strong> {job.requireExpYear} năm</p>
        <p><strong>Địa điểm:</strong> {job.location}</p>
        <p><strong>Mô tả:</strong> {job.jobDescription || job.description}</p>
        <p><strong>Hạn nộp:</strong> {new Date(job.expireDate).toLocaleDateString()}</p>
        
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button className="btn btn-cancel" onClick={onClose}>Đóng</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailModal;
