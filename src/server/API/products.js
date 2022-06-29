// 操作数据库
let db = require('../db/index')

exports.get_all = (req, res) => {
  var sql = 'select * from products'
  db.query(sql, [req.query.id, req.query.productName, req.query.amount, req.query.price], (err, data) => {
    if (err) {
      return res.send('错误:' + err.message)
    }
    res.send(data)
  })
}

exports.addProduct = (req, res) => {
  const sqlStr = 'INSERT INTO products (productName,amount,price) values (?,?,?)'
  db.query(sqlStr, [req.query.productName, req.query.amount, req.query.price], (err, data) => {})
}

exports.changeProduct = (req, res) => {
  const sqlStr = 'UPDATE products SET productName=?,amount=?,price=? WHERE id=?'
  db.query(sqlStr, [req.query.productName, req.query.amount, req.query.price, req.query.id], (err, res) => {})
}

exports.delProduct = (req, res) => {
  const sqlStr = 'DELETE FROM products WHERE id=?'
  db.query(sqlStr, [req.query.id], (err, res) => {})
}
