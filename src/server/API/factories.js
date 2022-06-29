// 操作数据库
let db = require('../db/index')

exports.get_all = (req, res) => {
  var sql = 'select * from factories'
  db.query(sql, [req.query.id, req.query.factoryName, req.query.owner, req.query.profit, req.query.scale], (err, data) => {
    res.send(data)
  })
}

exports.addFactory = (req, res) => {
  const sqlStr = 'INSERT INTO factories (factoryName,owner,profit,scale) values (?,?,?,?)'
  db.query(sqlStr, [req.query.factoryName, req.query.owner, req.query.profit, req.query.scale], (err, data) => {})
}

exports.changeFactory = (req, res) => {
  const sqlStr = 'UPDATE factories SET factoryName=?,owner=?,profit=?,scale=? WHERE id=?'
  db.query(sqlStr, [req.query.factoryName, req.query.owner, req.query.profit, req.query.scale, req.query.id], (err, res) => {})
}

exports.delFactory = (req, res) => {
  const sqlStr = 'DELETE FROM factories WHERE id=?'
  db.query(sqlStr, [req.query.id], (err, res) => {})
}
