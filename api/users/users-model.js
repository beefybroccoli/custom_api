const db = require("../../database/db-config");

async function getAll(){
    return await db("users");
}

async function getById(id){
    return await db('users').where('id', id);
}

async function getBy(filter){
    return await db('users').where({...filter});
}

async function addUser(user){
    const {username, password} = user;
    // const id = await db.select("nextval('users_id_seq')");
    // console.log("id = ", id);
    // return await db('users').insert({...user, id:id});
    return await db('users').insert({...user});
}

async function modifyUser(id, user){
    return await db('users').update({...user}).where("id", id);
}

async function deleteUser(id){
    return await db('users').where('id', id).del();
}

module.exports = {getAll, getById, addUser,modifyUser,deleteUser, getBy};