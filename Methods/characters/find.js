const types = {
    name: '?name=[detail]',
    nname: '?name!=[detail]',
    race: '?race=[detail]',
    nrace: '?race!=[detail]',
    gender: '?gender=[detail]',
    ngender: '?gender!=[detail]',
    spouse: '?spouse=[detail]',
    nspouse: '?spouse!=[detail]'
}

module.exports = async (type, detail, prefix, axios, token) => {
    const keys = Object.keys(types);
    if(!keys.includes(type.toLowerCase())) throw new TypeError(`Invalid character type.`);
    let rep;
    if(Array.isArray(detail)){
        rep = detail.map(el => el).join(',');
    } else {
        rep = detail;
    }

    const t = types[type].replace('[detail]', rep)

    const res = await axios.get(`${prefix}/character${t}`, {headers: {Authorization: `Bearer ${token}`}}).catch(err => {
        if(err.response.status === 401) throw new Error('Invalid Token Provided.')
    })
    const data = res.data.docs
    if(data.length < 1) throw new Error(`Character not found.`)
    


    return data;
}