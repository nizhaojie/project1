// 操作数据库
let db = require('../db/index')

exports.get_all = (req, res) => {
  var sql = 'select * from generateplan'
  db.query(sql, [req.query.id, req.query.productId, req.query.targetAmount, req.query.existingAmount, req.query.deadline, req.query.startTime, req.query.status, req.query.factoryId], (err, data) => {
    if (err) {
      return res.send('错误:' + err.message)
    }
    res.send(data)
  })
}

exports.addGeneratePlan = (req, res) => {
  const sqlStr = 'INSERT INTO generateplan (productId,targetAmount,existingAmount,deadline,startTime,status,factoryId) values (?,?,?,?,?,?,?)'
  db.query(sqlStr, [req.query.productId, req.query.targetAmount, req.query.existingAmount, req.query.deadline, req.query.startTime, req.query.status, req.query.factoryId], (err, data) => {})
}

exports.changeGeneratePlan = (req, res) => {
  const sqlStr = 'UPDATE generateplan SET productId=?,targetAmount=?,existingAmount=?,deadline=?,startTime=?,status=?,factoryId=? WHERE id=?'
  db.query(sqlStr, [req.query.productId, req.query.targetAmount, req.query.existingAmount, req.query.deadline, req.query.startTime, req.query.status, req.query.factoryId, req.query.id], (err, res) => {})
}

exports.delGeneratePlan = (req, res) => {
  const sqlStr = 'DELETE FROM generateplan WHERE id=?'
  db.query(sqlStr, [req.query.id], (err, res) => {})
}
