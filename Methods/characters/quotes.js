module.exports = async (id, prefix, axios, token) => {
    let res;
    let data;

    if(isNaN(id)){
        res = await axios.get(`${prefix}/character/${id}/quote`, {headers: {Authorization: `Bearer ${token}`}}).catch(err => {
            if(err.response.status === 401) throw new Error('Invalid Token Provided.')
        })

        data = res.data.docs;
    } else {
        throw new TypeError(`This method cannot search by index, you must provide an EXACT ID.`)
    }
    
    if(!data || data.length < 1) throw new Error(`An error occurred, possible invalid character ID.`)

    return data;
}