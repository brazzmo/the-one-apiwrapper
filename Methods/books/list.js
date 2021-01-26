module.exports = async (prefix, axios) => {
    const res = await axios.get(`${prefix}/book`)
    const data = res.data.docs
    


    return data;
}