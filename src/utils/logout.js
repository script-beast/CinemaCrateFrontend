import { useNavigate } from "react-router-dom";

const logout = () => {
  const navigate = useNavigate();

  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");

  navigate("/login");
};

export default logout;
