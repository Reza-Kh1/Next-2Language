import axios from "axios";
const getProducts = async () => {
    const { data } = await axios.get("products")
    console.log(data);
    return data
}

const getSingleProduct = async (slug?: string) => {
    const { data } = await axios.get(`products/${slug}`)
    return data
}
const getProjects = async () => {
    const { data } = await axios.get("products")
    return data
}
const getSingleProject = async () => {
    const { data } = await axios.get("products")
    return data
}
const getBlogs = async () => {
    const { data } = await axios.get("products")
    return data
}
const getSingleBlog = async () => {
    const { data } = await axios.get("products")
    return data
}
export {
    getProducts,
    getSingleProduct,
    getProjects,
    getSingleProject,
    getBlogs,
    getSingleBlog
}