import axios from "axios";
const getProducts = async () => {
  const { data } = await axios.get("products");
  return data;
};
const getAllUsers = async () => {
  return axios.get("getusers");
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
};
export {
  getProducts,
  getSingleProduct,
  getProjects,
  getSingleProject,
  getBlogs,
  getSingleBlog,
  getAllUsers,
};
