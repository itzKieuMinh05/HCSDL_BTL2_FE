import React, { useState } from "react";
import "../css/searchBySalaryDate.css"
import { searchJobs } from "../../api/getApi.js";


const FilterModal = ({ onClose, onFilter }) => {
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [postDate, setPostDate] = useState("");
  const [onlyOpenJobs, setOnlyOpenJobs] = useState(false);
  const [jcName, setJCName] = useState("");

  const handleFilter = () => {
    const formattedDate = postDate
      ? `${postDate}T01:37:03.773Z`
      : undefined;
    const filterPayload = {
      salaryFrom: salaryFrom !== "" ? Number(salaryFrom) : undefined,
      salaryTo: salaryTo !== "" ? Number(salaryTo) : undefined,
      postDate: formattedDate,
      onlyOpenJobs,
    };
    onFilter(filterPayload);
    onClose();
  };

  const handleClearFilter = async () => {
    //  try {
        const jobs = await searchJobs({
          action: "get",            // bắt buộc
          sortOrder: "DESC",       // nếu bạn dùng sắp xếp
          postDate: new Date("2000-01-01").toISOString(),
          onlyOpenJobs: true
  
          // Không truyền các filter khác
        });
    console.log("Kết quả từ API:", jobs); // 👈 thêm dòng này để debug
    onFilter(jobs);
    onClose();
      // } catch (error) {
      //   console.error("Lỗi khi xóa bộ lọc:", error.message);
      // }
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Lọc công việc</h3>

        <div className="form-grid">
          <label htmlFor="salaryFrom">Mức lương từ:</label>
          <input
            id="salaryFrom"
            type="number"
            value={salaryFrom}
            onChange={(e) => setSalaryFrom(e.target.value)}
          />

          <label htmlFor="salaryTo">Đến:</label>
          <input
            id="salaryTo"
            type="number"
            value={salaryTo}
            onChange={(e) => setSalaryTo(e.target.value)}
          />

          <label htmlFor="postDate">Ngày đăng:</label>
          <input
            id="postDate"
            type="date"
            value={postDate}
            onChange={(e) => setPostDate(e.target.value)}
          />
        </div>

        <div className="checkbox-row">
          <input
            type="checkbox"
            id="onlyOpenJobs"
            checked={onlyOpenJobs}
            onChange={(e) => setOnlyOpenJobs(e.target.checked)}
          />
          <label htmlFor="onlyOpenJobs">Chỉ chọn những công việc đang mở</label>
        </div>

        <div className="modal-buttons">
          <button className="btn btn-primary" onClick={handleFilter}>Tìm kiếm</button>
          <button className="btn btn-cancel" onClick={onClose}>Hủy</button>
          <button className="btn btn-reset" onClick={handleClearFilter}> Xóa bộ lọc </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
