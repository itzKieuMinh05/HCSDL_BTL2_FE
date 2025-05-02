// JobModal.jsx
import React, { useState } from "react";
import "../css/modal.css";

const JobModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // gọi callback truyền từ PostJob
    setFormData({ 
      jobName: formData.title,
      postDate: formData.deadline,
      jobDescription: formData.description
     });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thêm Công Việc Mới</h2>
        <form onSubmit={handleSubmit} className="job-form">
          <input
            type="text"
            placeholder="Tên công việc"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
          <input
            type="date"
            value={formData.deadline}
            onChange={(e) =>
              setFormData({ ...formData, deadline: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Mô tả chi tiết"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
          <div className="modal-buttons">
            <button type="submit" className="btn btn-confirm">
              Thêm
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={onClose}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobModal;
