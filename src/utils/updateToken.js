import { api } from "./";

const updateToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    return;
  }

  try {
    const data = await api.post("refreshToken", { refreshToken });
    localStorage.setItem("token", data.result);
  } catch (e) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  }
};

export default updateToken;
