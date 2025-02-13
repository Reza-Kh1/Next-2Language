import axios from "axios";
const getProducts = async () => {
  const { data } = await axios.get("products");
  return data;
};
const getAllUsers = async (query: string) => {
  const url = new URLSearchParams(query);
  const { data } = await axios.get(`getusers?${url}`);
  return data
};
const getSingleProduct = async (slug?: string) => {
  const { data } = await axios.get(`products/${slug}`);
  return data;
};
const getProjects = async () => {
  const { data } = await axios.get("projects");
  return data;
};
const getSingleProject = async (slug?: string) => {
  const { data } = await axios.get(`projects/${slug}`);
  return data;
};
const getBlogs = async () => {
  const { data } = await axios.get("blogs");
  return data;
};
const getSingleBlog = async (slug?: string) => {
  const { data } = await axios.get(`blogs/${slug}`);
  return data;
}
const getComments = async (query: string) => {
  const url = new URLSearchParams(query);
  const { data } = await axios.get(`comments?${url}`);
  return data;
};
export {
  getProducts,
  getSingleProduct,
  getProjects,
  getSingleProject,
  getBlogs,
  getSingleBlog,
  getAllUsers,
  getComments
};
