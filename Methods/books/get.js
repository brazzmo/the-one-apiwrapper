module.exports = async (id, prefix, axios) => {
    let res;
    let data;

    if(isNaN(id)){
        res = await axios.get(`${prefix}/book/${id}`)

        data = res.data.docs[0];
    } else {
        const getter = await axios.get(`${prefix}/book`)

        data = getter.data.docs[id]
    }
    
    if(!data) throw new Error(`An error occurred, possible invalid book ID.`)

    return data;
}