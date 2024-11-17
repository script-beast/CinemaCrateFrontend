import { api } from "../utils";

export const getStandardCrates = async ({
  limit = 10,
  page = 1,
  search = null,
  category = null,
  genre = null,
  cast = null,
  ...options
}) => {
  try {
    let query = `page=${page}&limit=${limit}`;
    if (search) query += `&search=${search}`;
    if (category) query += `&category=${category}`;
    if (genre) query += `&genre=${genre}`;
    if (cast) query += `&cast=${cast}`;

    const json = await api.get(`crates/standard?${query}`, {
      ...options,
    });
    return json.data;
  } catch (error) {
    throw error;
  }
};

export const getStandardCrate = async (id, options) => {
  try {
    const json = await api.get(`crates/standard/${id}`, {
      ...options,
    });
    return json.data;
  } catch (error) {
    throw error;
  }
};