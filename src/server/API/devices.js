// 操作数据库
let db = require('../db/index')

exports.get_all = (req, res) => {
  var sql = 'select * from devices'
  db.query(sql, [req.query.id, req.query.deviceName, req.query.productId, req.query.status], (err, data) => {
    if (err) {
      return res.send('错误:' + err.message)
    }
    res.send(data)
  })
}

exports.addDevice = (req, res) => {
  const sqlStr = 'INSERT INTO devices (deviceName,productId,status) values (?,?,?)'
  db.query(sqlStr, [req.query.deviceName, req.query.productId, req.query.status], (err, data) => {})
}

exports.changeDevice = (req, res) => {
  const sqlStr = 'UPDATE devices SET deviceName=?,productId=?,status=? WHERE id=?'
  db.query(sqlStr, [req.query.deviceName, req.query.productId, req.query.status, req.query.id], (err, res) => {})
}

exports.delDevice = (req, res) => {
  const sqlStr = 'DELETE FROM devices WHERE id=?'
  db.query(sqlStr, [req.query.id], (err, res) => {})
}
