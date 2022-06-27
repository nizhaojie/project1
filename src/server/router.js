// 配置对应路由
let express = require('express')
let router = express.Router()

let products = require('./API/products')
let factories = require('./API/factories')
let devices = require('./API/devices')
let orders = require('./API/orders')
let generateplan = require('./API/generatePlan')

router.get('/products', products.get_all)
router.get('/productsAdd', products.addProduct)
router.get('/productsChange', products.changeProduct)
router.get('/productsDel', products.delProduct)

router.get('/factories', factories.get_all)
router.get('/factoriesAdd', factories.addFactory)
router.get('/factoriesChange', factories.changeFactory)
router.get('/factoriesDel', factories.delFactory)

router.get('/devices', devices.get_all)
router.get('/devicesAdd', devices.addDevice)
router.get('/devicesChange', devices.changeDevice)
router.get('/devicesDel', devices.delDevice)

router.get('/orders', orders.get_all)
router.get('/ordersAdd', orders.addOrder)
router.get('/ordersChange', orders.changeOrder)
router.get('/ordersDel', orders.delOrder)

router.get('/generateplan', generateplan.get_all)
router.get('/generateplanAdd', generateplan.addGeneratePlan)
router.get('/generateplanChange', generateplan.changeGeneratePlan)
router.get('/generateplanDel', generateplan.delGeneratePlan)

module.exports = router
