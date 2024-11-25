"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await axios.post("/api/admin/logout", {
      sessionKey: localStorage.getItem("sessionKey"),
    });
    if (response.data.success) {
      localStorage.removeItem("sessionKey");
      router.push("/admin");
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className='content column gap20'>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout} style={{ color: "indianred" }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;