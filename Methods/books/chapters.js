module.exports = async (id, prefix, axios) => {
    let res;
    let data;

    if(isNaN(id)){
        res = await axios.get(`${prefix}/book/${id}/chapter`)

        data = res.data.docs;
    } else {
        throw new TypeError(`This method cannot search by index, you must provide an EXACT ID.`)
    }
    
    if(!data || data.length < 1) throw new Error(`An error occurred, possible invalid book ID.`)

    return data;
}