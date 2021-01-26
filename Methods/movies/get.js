module.exports = async (id, prefix, axios, token) => {
    let res;
    let data;

    if(isNaN(id)){
        res = await axios.get(`${prefix}/movie/${id}`, {headers: {Authorization: `Bearer ${token}`}}).catch(err => {
            if(err.response.status === 401) throw new Error('Invalid Token Provided.')
        })

        data = res.data.docs[0];
    } else {
        const getter = await axios.get(`${prefix}/movie`, {headers: {Authorization: `Bearer ${token}`}}).catch(err => {
            if(err.response.status === 401) throw new Error('Invalid Token Provided.')
        })

        data = getter.data.docs[id]
    }
    
    if(!data) throw new Error(`An error occurred, possible invalid character ID.`)

    return data;
}