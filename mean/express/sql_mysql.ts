module.exports = {
    LIST_ALL_SQL : "select * from employee",
    GET_SQL : "select * from employee where id = ?",
    UPDATE_SQL : "update employee set name = ? , gender = ? where id = ?",
    DELETE_SQL : "delete from employee where id = ?",
    POST_SQL : "insert into employee (id,name,gender) values (?,?,?)",
}