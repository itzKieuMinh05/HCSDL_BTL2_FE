import React, { useState } from "react";
import { searchJCByKeyword } from "../../api/getApi";

const SearchBar = ({ onSearchResults }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = async () => {
    try {
      console.log("Tìm kiếm với từ khóa:", keyword);
      const results = await searchJCByKeyword(keyword);
      onSearchResults(results);
    } catch (error) {
      console.error("Lỗi tìm kiếm:", error);
      alert("Không tìm thấy kết quả phù hợp.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="🔍 Nhập từ khóa tìm kiếm..."
        style={{ padding: "8px", width: "300px" }}
      />
      <button onClick={handleSearch} className="btn btn-primary">Tìm kiếm</button>
    </div>
  );
};

export default SearchBar;