import React from "react";
import "../css/deleteConfirm.css";

const DeleteConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Bạn có chắc chắn muốn xóa công việc không?</h3>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-btn">Đồng ý</button>
          <button onClick={onCancel} className="cancel-btn">Hủy</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
