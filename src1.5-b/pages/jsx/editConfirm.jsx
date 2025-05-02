import React, { useState, useEffect } from "react";
import "../css/editConfirm.css";

const EditModal = ({ job, onClose, onSubmit }) => {
  const [title, setTitle] = useState(job.title || "");
  const [deadline, setDeadline] = useState(job.deadline || "");


  const handleSubmit = () => {
    const updatedJob = { ...job, title, deadline };
    onSubmit(updatedJob);
  };


  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Chỉnh sửa công việc</h2>
        <label>Tiêu đề</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Hạn chót</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <div className="modal-buttons">
          <button onClick={handleSubmit}>Lưu</button>
          <button className="cancel" onClick={onClose}>Hủy</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;