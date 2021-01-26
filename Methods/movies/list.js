module.exports = async (prefix, axios, token) => {
    const res = await axios.get(`${prefix}/movie`, {headers: {Authorization: `Bearer ${token}`}}).catch(err => {
        if(err.response.status === 401) throw new Error('Invalid Token Provided.')
    })
    const data = res.data.docs
    


    return data;
}