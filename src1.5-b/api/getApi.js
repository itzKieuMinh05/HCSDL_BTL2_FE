import axios from "axios";

export const getJobDetailById = async (jobId) => {
  const token = localStorage.getItem("token");
  if (!token){
    console.error("getJobDetailById: Không tìm thấy token trong localStorage");
    throw new Error("Không tìm thấy token");
  }
  try {
    const res = await axios.get(`http://localhost:8080/api/jobs/${jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data.data || null;
  } catch (error) {
    console.error("Lỗi lấy chi tiết công việc:", error.message);
    throw error;
  }
};

export const searchJobs = async ({ salaryFrom, salaryTo, postDate, onlyOpenJobs }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("searchJobs: Không tìm thấy token trong localStorage");
    throw new Error("Không tìm thấy token");
  }
  const payload = {
    action: "get",
    salaryFrom: salaryFrom,
    salaryTo: salaryTo,
    postDate: postDate,
    sortOrder: "DESC",
    filter: !!onlyOpenJobs
  };
  console.log("searchJobs: Payload:", payload);
  console.log("Payload gửi đi:", JSON.stringify(payload, null, 2));

  try{
  const res2 = await axios.post(
    "http://localhost:8080/api/employers/jobs/search-by-salary-date",
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res2.data.data || [];
    }
  catch (error) {
    console.error("Lỗi tìm kiếm công việc:", error.message);
    throw error;
  }
};

export const searchJCByKeyword = async (keyword) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("searchJCByKeyword: Không tìm thấy token trong localStorage");
    throw new Error("Không tìm thấy token");
  }
  const payload = {
    action: "search",
    jcName: keyword,
  };

    console.log("searchJCByKeyword: Payload:", payload);
    const res = await axios.post(
      "http://localhost:8080/api/employers/jobs/search-by-salary-date",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data.data || null;
  // } catch (error) {
  //   console.error("Lỗi tìm kiếm công việc:", error.message);
  //   throw error;
  // }
}