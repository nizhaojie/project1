// 操作数据库
let db = require('../db/index')

exports.get_all = (req, res) => {
  var sql = 'select * from orders'
  db.query(sql, [req.query.id, req.query.buyer, req.query.product_id, req.query.target_amount, req.query.existing_amount, req.query.status, req.query.value], (err, data) => {
    if (err) {
      return res.send('错误:' + err.message)
    }
    res.send(data)
  })
}

exports.addOrder = (req, res) => {
  const sqlStr = 'INSERT INTO orders (buyer,product_id,target_amount,status,value) values (?,?,?,?,?)'
  db.query(sqlStr, [req.query.buyer, req.query.product_id, req.query.target_amount, req.query.status, req.query.value], (err, data) => {})
}

exports.changeOrder = (req, res) => {
  const sqlStr = 'UPDATE orders SET buyer=?,product_id=?,target_amount=?,status=?,value=? WHERE id=?'
  db.query(sqlStr, [req.query.buyer, req.query.product_id, req.query.target_amount, req.query.status, req.query.value, req.query.id], (err, res) => {})
}

exports.delOrder = (req, res) => {
  const sqlStr = 'DELETE FROM orders WHERE id=?'
  db.query(sqlStr, [req.query.id], (err, res) => {})
}
