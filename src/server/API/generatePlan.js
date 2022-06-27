// 操作数据库
let db = require('../db/index')

exports.get_all = (req, res) => {
  var sql = 'select * from generateplan'
  db.query(sql, [req.query.id, req.query.product_id, req.query.target_amount, req.query.existing_amount, req.query.deadline, req.query.start_time, req.query.status, req.query.factory_id], (err, data) => {
    if (err) {
      return res.send('错误:' + err.message)
    }
    res.send(data)
  })
}

exports.addGeneratePlan = (req, res) => {
  const sqlStr = 'INSERT INTO generateplan (product_id,target_amount,existing_amount,deadline,start_time,status,factory_id) values (?,?,?,?,?,?,?)'
  db.query(sqlStr, [req.query.product_id, req.query.target_amount, req.query.existing_amount, req.query.deadline, req.query.start_time, req.query.status, req.query.factory_id], (err, data) => {})
}

exports.changeGeneratePlan = (req, res) => {
  const sqlStr = 'UPDATE generateplan SET product_id=?,target_amount=?,existing_amount=?,deadline=?,start_time=?,status=?,factory_id=? WHERE id=?'
  db.query(sqlStr, [req.query.product_id, req.query.target_amount, req.query.existing_amount, req.query.deadline, req.query.start_time, req.query.status, req.query.factory_id, req.query.id], (err, res) => {})
}

exports.delGeneratePlan = (req, res) => {
  const sqlStr = 'DELETE FROM generateplan WHERE id=?'
  db.query(sqlStr, [req.query.id], (err, res) => {})
}
