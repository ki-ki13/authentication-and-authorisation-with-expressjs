const get_user_id = async (req) =>{
    return req?.signedCookies?.user?.id||0;
}

const get_username = async (req)=>{
    return req?.signedCookies?.user?.username||0;
}

module.exports = {
    get_user_id,
    get_username
}