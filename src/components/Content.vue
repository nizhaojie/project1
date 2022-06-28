<template>
  <div class="content">

    <div class="content_factory">
      <!-- 输入框 -->
      <div class="input-group">
        <label class="label">工厂编号</label>
        <input autocomplete="off" class="input" ref="factoryid_input">
      </div>
      <!-- 按钮 -->
      <button class="content_button search" @click="search_factory_id">搜索</button>
      <button class="content_button add" @click="addFactory">添加</button>
      <button class="content_button list" @click="list_factories">列表展示</button>
      <button class="content_button graphics" @click="graphics_factories">可视化展示</button>
      <!-- 可视化展示 -->
      <div ref="factories_table1" class="echarts-box" style="width: 400px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
      </div>
      <div ref="factories_table2" class="echarts-box" style="width: 400px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:481px;display:none">
      </div>
      <div ref="factories_table4" style="width: 800px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
        <el-table :data="tableData_factories" height="500" border style="width: 100%;text-align:center">
          <el-table-column prop="id" label="工厂编号">
          </el-table-column>
          <el-table-column prop="factory_name" label="工厂名">
          </el-table-column>
          <el-table-column prop="owner" label="所有者">
          </el-table-column>
          <el-table-column prop="profit" label="年盈利">
          </el-table-column>
          <el-table-column prop="scale" label="规模(员工数量)">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="changeFactory(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delFactory(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div ref="factories_table3" style="width: 800px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
        <el-table :data="tableData_factories" height="500" border style="width: 100%;text-align:center">
          <el-table-column prop="id" label="工厂编号">
          </el-table-column>
          <el-table-column prop="factory_name" label="工厂名">
          </el-table-column>
          <el-table-column prop="owner" label="所有者">
          </el-table-column>
          <el-table-column prop="profit" label="年盈利">
          </el-table-column>
          <el-table-column prop="scale" label="规模(员工数量)">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="changeFactory(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delFactory(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

    </div>

    <div class="content_device">
      <div class="input-group">
        <label class="label">设备编号</label>
        <input autocomplete="off" ref="deviceid_input" class="input">
      </div>
      <button class="content_button search" @click="search_device_id">搜索</button>
      <button class="content_button add" @click="addDevice">添加</button>
      <button class="content_button list" @click="list_devices">列表展示</button>
      <div ref="devices_table" style="width: 800px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
        <el-table :data="tableData_devices" height="500" border style="width: 100%;text-align:center">
          <el-table-column prop="id" label="设备编号">
          </el-table-column>
          <el-table-column prop="device_name" label="设备名">
          </el-table-column>
          <el-table-column prop="product_id" label="设备关联产品的编号">
          </el-table-column>
          <el-table-column prop="status" label="设备状态">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="changeDevice(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delDevice(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div ref="devices_table1" style="width: 800px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
        <el-table :data="tableData_devices" height="500" border style="width: 100%;text-align:center">
          <el-table-column prop="id" label="设备编号">
          </el-table-column>
          <el-table-column prop="device_name" label="设备名">
          </el-table-column>
          <el-table-column prop="product_id" label="设备关联产品的编号">
          </el-table-column>
          <el-table-column prop="status" label="设备状态">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="changeDevice(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delDevice(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="content_product">
      <div class="input-group">
        <label class="label">产品编号</label>
        <input autocomplete="off" ref="productid_input" class="input">
      </div>

      <button class="content_button search" @click="search_product_id">搜索</button>
      <button class="content_button add" @click="addProduct">添加</button>
      <button class="content_button list" @click="list_products">列表展示</button>
      <button class="content_button graphics" @click="graphics_products">可视化展示</button>
      <div ref="products_table1" class="echarts-box" style="width: 400px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
      </div>
      <div ref="products_table2" class="echarts-box" style="width: 400px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:481px;display:none">
      </div>
      <div ref="products_table3" style="width: 800px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
        <el-table :data="tableData_products" height="500" border style="width: 100%;text-align:center">
          <el-table-column prop="id" label="产品编号">
          </el-table-column>
          <el-table-column prop="product_name" label="产品名">
          </el-table-column>
          <el-table-column prop="amount" label="数量">
          </el-table-column>
          <el-table-column prop="price" label="单价">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="changeProduct(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delProduct(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div ref="products_table4" style="width: 800px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
        <el-table :data="tableData_products" height="500" border style="width: 100%;text-align:center">
          <el-table-column prop="id" label="产品编号">
          </el-table-column>
          <el-table-column prop="product_name" label="产品名">
          </el-table-column>
          <el-table-column prop="amount" label="数量">
          </el-table-column>
          <el-table-column prop="price" label="单价">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="changeProduct(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delProduct(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="content_order">
      <div class="input-group">
        <label class="label">订单编号</label>
        <input autocomplete="off" ref="orderid_input" class="input">
      </div>

      <button class="content_button search" @click="search_order_id">搜索</button>
      <button class="content_button add" @click="addOrder">添加</button>
      <button class="content_button list" @click="list_orders">列表展示</button>

      <div ref="orders_table" style="width: 800px; height:500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
        <el-table :data="tableData_orders" height="500" border style="width: 100%;text-align:center">
          <el-table-column fixed="left" prop="id" label="订单编号">
          </el-table-column>
          <el-table-column prop="buyer" label="买家">
          </el-table-column>
          <el-table-column prop="product_id" label="产品编号">
          </el-table-column>
          <el-table-column prop="target_amount" label="要求数量">
          </el-table-column>
          <el-table-column prop="status" label="订单状态">
          </el-table-column>
          <el-table-column prop="value" label="订单额度">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="changeOrder(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delOrder(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div ref="orders_table1" style="width: 800px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
        <el-table :data="tableData_orders" height="500" border style="width: 100%;text-align:center">
          <el-table-column fixed="left" prop="id" label="订单编号">
          </el-table-column>
          <el-table-column prop="buyer" label="买家">
          </el-table-column>
          <el-table-column prop="product_id" label="产品编号">
          </el-table-column>
          <el-table-column prop="target_amount" label="要求数量">
          </el-table-column>
          <el-table-column prop="status" label="订单状态">
          </el-table-column>
          <el-table-column prop="value" label="订单额度">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="changeOrder(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delOrder(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="content_GeneratePlan">
      <div class="input-group">
        <label class="label">生产计划编号</label>
        <input autocomplete="off" ref="generateplanid_input" class="input">
      </div>

      <button class="content_button search" @click="search_generateplan_id">搜索</button>
      <button class="content_button add" @click="addGenerateplan">添加</button>
      <button class="content_button list" @click="list_generateplan">列表展示</button>

      <div ref="generateplan_table" style="width: 800px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
        <el-table :data="tableData_generateplan" height="500" border style="width: 100%;text-align:center">
          <el-table-column prop="id" label="生产计划编号">
          </el-table-column>
          <el-table-column prop="product_id" label="产品编号">
          </el-table-column>
          <el-table-column prop="target_amount" label="要求数量">
          </el-table-column>
          <el-table-column prop="existing_amount" label="已有数量">
          </el-table-column>
          <el-table-column prop="deadline" label="截止日期">
          </el-table-column>
          <el-table-column prop="start_time" label="开始日期">
          </el-table-column>
          <el-table-column prop="status" label="生产计划状态">
          </el-table-column>
          <el-table-column prop="factory_id" label="工厂编号">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="changeGenerateplan(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delGenerateplan(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div ref="generateplan_table1" style="width: 800px; height: 500px; border: 1px solid black;position:absolute;top:150px;left:80px;display:none">
        <el-table :data="tableData_generateplan" height="500" border style="width: 100%;text-align:center">
          <el-table-column prop="id" label="生产计划编号">
          </el-table-column>
          <el-table-column prop="product_id" label="产品编号">
          </el-table-column>
          <el-table-column prop="target_amount" label="要求数量">
          </el-table-column>
          <el-table-column prop="existing_amount" label="已有数量">
          </el-table-column>
          <el-table-column prop="deadline" label="截止日期">
          </el-table-column>
          <el-table-column prop="start_time" label="开始日期">
          </el-table-column>
          <el-table-column prop="status" label="生产计划状态">
          </el-table-column>
          <el-table-column prop="factory_id" label="工厂编号">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="changeGenerateplan(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delGenerateplan(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="content_GenerateSchedule">
      <div class="input-group generateSchedule1">
        <label class="label">产品编号</label>
        <input autocomplete="off" class="input" ref="submit_productid">
      </div>
      <div class="input-group generateSchedule2">
        <label class="label">生产数量</label>
        <input autocomplete="off" class="input" ref="submit_amountall">
      </div>
      <div class="input-group generateSchedule3">
        <label class="label">合格数量</label>
        <input autocomplete="off" class="input" ref="submit_amountgood">
      </div>
      <button class="content_button submit" @click="submit">提交</button>
    </div>
  </div>

</template>

<script>
// 引入axios
import axios from 'axios'
export default {
  data() {
    return {
      // 保存工厂数据的数组
      tableData_factories: [
        {
          id: 0,
          factory_name: '',
          owner: '',
          profit: 0,
          scale: 0
        }
      ],
      // 保存产品数据的数组
      tableData_products: [
        {
          id: 0,
          product_name: '',
          amount: 0,
          price: 0
        }
      ],
      // 保存设备数据的数组
      tableData_devices: [
        {
          id: 0,
          device_name: '',
          status: 0,
          product_id: ''
        }
      ],
      // 保存订单数据的数组
      tableData_orders: [
        {
          id: 0,
          buyer: '',
          product_id: 0,
          target_amount: 0,
          status: 0,
          value: 0
        }
      ],
      // 保存生产计划数据的数组
      tableData_generateplan: [
        {
          id: 0,
          product_id: 0,
          target_amount: 0,
          existing_amount: 0,
          deadline: '',
          start_time: '',
          status: 0,
          factory_id: 0
        }
      ]
    }
  },
  mounted() {
    //每次进入该页面自动执行该方法，即自动读取数据库数据导入到页面当中
    this.all()
  },
  methods: {
    all() {
      axios
        .get('http://localhost/products')
        .then(res => {
          this.tableData_products = res.data //数据传递到页面数组
          console.log('产品数据获取成功')
        })
        .catch(err => {
          console.log('产品数据获取失败' + err)
        })

      axios
        .get('http://localhost/factories')
        .then(res => {
          this.tableData_factories = res.data //数据传递到页面数组
          console.log('工厂数据获取成功')
        })
        .catch(err => {
          console.log('工厂数据获取失败' + err)
        })

      axios
        .get('http://localhost/devices')
        .then(res => {
          this.tableData_devices = res.data //数据传递到页面数组
          console.log('设备数据获取成功')
        })
        .catch(err => {
          console.log('设备数据获取失败' + err)
        })

      axios
        .get('http://localhost/orders')
        .then(res => {
          this.tableData_orders = res.data //数据传递到页面数组
          console.log('订单数据获取成功')
        })
        .catch(err => {
          console.log('订单数据获取失败' + err)
        })

      axios
        .get('http://localhost/generateplan')
        .then(res => {
          this.tableData_generateplan = res.data //数据传递到页面数组
          console.log('生产计划数据获取成功')
        })
        .catch(err => {
          console.log('生产计划数据获取失败' + err)
        })
    },
    // 产品数据可视化展示
    graphics_products() {
      axios
        .get('http://localhost/products')
        .then(res => {
          this.tableData_products = res.data //数据传递到页面数组
          console.log('产品数据获取成功')

          this.$refs.products_table3.style.display = 'none'
          this.$refs.products_table4.style.display = 'none'
          let products_table1 = this.$echarts.init(this.$refs.products_table1)
          this.$refs.products_table1.style.display = 'block'
          let products_table2 = this.$echarts.init(this.$refs.products_table2)
          this.$refs.products_table2.style.display = 'block'
          let options1 = {
            title: {
              text: '产品单价信息',
              subtext: '测试数据',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: '产品名---单价',
                type: 'pie',
                radius: '50%',
                data: [],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
          for (let i = 0; i < this.tableData_products.length; i++) {
            options1.series[0].data.push({ value: 0, name: '' })
            options1.series[0].data[i].value = this.tableData_products[i].price
            options1.series[0].data[i].name = this.tableData_products[i].product_name
          }
          options1 && products_table1.setOption(options1)

          let options2 = {
            title: {
              text: '产品数量信息',
              subtext: '测试数据',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: '产品名---数量',
                type: 'pie',
                radius: '50%',
                data: [],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
          for (let i = 0; i < this.tableData_products.length; i++) {
            options2.series[0].data.push({ value: 0, name: '' })
            options2.series[0].data[i].value = this.tableData_products[i].amount
            options2.series[0].data[i].name = this.tableData_products[i].product_name
          }
          options2 && products_table2.setOption(options2)
        })
        .catch(err => {
          console.log('产品数据获取失败' + err)
        })
    },
    // 产品数据列表展示
    list_products() {
      axios
        .get('http://localhost/products')
        .then(res => {
          this.tableData_products = res.data //数据传递到页面数组
          console.log('产品数据获取成功')
          this.$refs.products_table1.style.display = 'none'
          this.$refs.products_table2.style.display = 'none'
          this.$refs.products_table3.style.display = 'block'
          this.$refs.products_table4.style.display = 'none'
        })
        .catch(err => {
          console.log('产品数据获取失败' + err)
        })
    },
    search_product_id() {
      axios
        .get('http://localhost/products')
        .then(res => {
          this.tableData_products = res.data //数据传递到页面数组
          console.log('产品数据获取成功')

          let productid_input = this.$refs.productid_input.value
          if (productid_input == '') {
            return alert('没有输入')
          }
          let finding_product = this.tableData_products.find(item => {
            return item.id == productid_input
          })
          if (finding_product == undefined) {
            return alert('没有该编号的产品数据')
          } else {
            this.tableData_products = [finding_product]
            this.$refs.products_table1.style.display = 'none'
            this.$refs.products_table2.style.display = 'none'
            this.$refs.products_table3.style.display = 'none'
            this.$refs.products_table4.style.display = 'block'
          }
        })
        .catch(err => {
          console.log('产品数据获取失败' + err)
        })
    },
    addProduct() {
      var product_name = prompt('请输入产品名')
      var amount = prompt('请输入产品数量')
      var price = prompt('请输入产品单价')
      if (product_name == '' || amount == '' || price == '') {
        return alert('请填写完整的信息')
      }
      axios
        .get('http://localhost/productsAdd', {
          params: {
            product_name: product_name,
            amount: amount,
            price: price
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeProduct(id) {
      var product_name = prompt('请输入产品名')
      var amount = prompt('请输入产品数量')
      var price = prompt('请输入产品单价')
      if (product_name == '' || amount == '' || price == '') {
        return alert('请填写完整的信息')
      }
      axios
        .get('http://localhost/productsChange', {
          params: {
            product_name: product_name,
            amount: amount,
            price: price,
            id: id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    delProduct(id) {
      axios
        .get('http://localhost/productsDel', {
          params: {
            id: id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    list_factories() {
      axios
        .get('http://localhost/factories')
        .then(res => {
          this.tableData_factories = res.data //数据传递到页面数组
          this.$refs.factories_table1.style.display = 'none'
          this.$refs.factories_table2.style.display = 'none'
          this.$refs.factories_table3.style.display = 'block'
          this.$refs.factories_table4.style.display = 'none'
        })
        .catch(err => {
          console.log('工厂数据获取失败' + err)
        })
    },
    graphics_factories() {
      axios
        .get('http://localhost/factories')
        .then(res => {
          this.tableData_factories = res.data //数据传递到页面数组
          this.$refs.factories_table3.style.display = 'none'
          this.$refs.factories_table4.style.display = 'none'
          let factories_table1 = this.$echarts.init(this.$refs.factories_table1)
          this.$refs.factories_table1.style.display = 'block'
          let factories_table2 = this.$echarts.init(this.$refs.factories_table2)
          this.$refs.factories_table2.style.display = 'block'
          let options1 = {
            title: {
              text: '工厂年盈利信息',
              subtext: '工厂名/所有者',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: '工厂名/所有者---年盈利',
                type: 'pie',
                radius: '50%',
                data: [],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
          for (let i = 0; i < this.tableData_factories.length; i++) {
            options1.series[0].data.push({ value: 0, name: '' })
            options1.series[0].data[i].value = this.tableData_factories[i].profit
            options1.series[0].data[i].name = this.tableData_factories[i].factory_name + '/' + this.tableData_factories[i].owner
          }
          options1 && factories_table1.setOption(options1)

          let options2 = {
            title: {
              text: '工厂规模信息',
              subtext: '工厂名/所有者',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: '工厂名/所有者---员工数量',
                type: 'pie',
                radius: '50%',
                data: [],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
          for (let i = 0; i < this.tableData_factories.length; i++) {
            options2.series[0].data.push({ value: 0, name: '' })
            options2.series[0].data[i].value = this.tableData_factories[i].scale
            options2.series[0].data[i].name = this.tableData_factories[i].factory_name + '/' + this.tableData_factories[i].owner
          }
          options2 && factories_table2.setOption(options2)
        })
        .catch(err => {
          console.log('工厂数据获取失败' + err)
        })
    },
    search_factory_id() {
      axios
        .get('http://localhost/factories')
        .then(res => {
          this.tableData_factories = res.data //数据传递到页面数组

          let factoryid_input = this.$refs.factoryid_input.value
          if (factoryid_input == '') {
            return alert('没有输入')
          }
          let finding_factory = this.tableData_factories.find(item => {
            return item.id == factoryid_input
          })
          if (finding_factory == undefined) {
            return alert('没有该编号的工厂数据')
          } else {
            this.tableData_factories = [finding_factory]
            this.$refs.factories_table1.style.display = 'none'
            this.$refs.factories_table2.style.display = 'none'
            this.$refs.factories_table3.style.display = 'none'
            this.$refs.factories_table4.style.display = 'block'
          }
        })
        .catch(err => {
          console.log('工厂数据获取失败' + err)
        })
    },
    addFactory() {
      var factory_name = prompt('请输入工厂名')
      var owner = prompt('请输入工厂所有者')
      var profit = prompt('请输入工厂年盈利')
      var scale = prompt('请输入工厂规模')
      if (factory_name == '' || owner == '' || profit == '' || scale == '') {
        return alert('请填写完整的信息')
      }
      axios
        .get('http://localhost/factoriesAdd', {
          params: {
            factory_name: factory_name,
            owner: owner,
            profit: profit,
            scale: scale
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeFactory(id) {
      var factory_name = prompt('请输入工厂名')
      var owner = prompt('请输入工厂所有者')
      var profit = prompt('请输入工厂年盈利')
      var scale = prompt('请输入工厂规模')
      if (factory_name == '' || owner == '' || profit == '' || scale == '') {
        return alert('请填写完整的信息')
      }
      axios
        .get('http://localhost/factoriesChange', {
          params: {
            factory_name: factory_name,
            owner: owner,
            profit: profit,
            scale: scale,
            id: id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    delFactory(id) {
      axios
        .get('http://localhost/factoriesDel', {
          params: {
            id: id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    list_devices() {
      axios
        .get('http://localhost/devices')
        .then(res => {
          this.tableData_devices = res.data //数据传递到页面数组
          console.log('设备数据获取成功')
          this.$refs.devices_table.style.display = 'block'
          this.$refs.devices_table1.style.display = 'none'
        })
        .catch(err => {
          console.log('设备数据获取失败' + err)
        })
    },
    search_device_id() {
      axios
        .get('http://localhost/devices')
        .then(res => {
          this.tableData_devices = res.data //数据传递到页面数组
          console.log('设备数据获取成功')

          let deviceid_input = this.$refs.deviceid_input.value
          if (deviceid_input == '') {
            return alert('没有输入')
          }
          let finding_device = this.tableData_devices.find(item => {
            return item.id == deviceid_input
          })
          if (finding_device == undefined) {
            return alert('没有该编号的设备数据')
          } else {
            this.tableData_devices = [finding_device]
            this.$refs.devices_table.style.display = 'none'
            this.$refs.devices_table1.style.display = 'block'
          }
        })
        .catch(err => {
          console.log('设备数据获取失败' + err)
        })
    },
    addDevice() {
      var device_name = prompt('请输入设备名')
      var product_id = prompt('请输入管理产品的编号')
      var status = prompt('请输入设备状态')
      if (device_name == '' || product_id == '' || status == '') {
        return alert('请填写完整的信息')
      }
      axios
        .get('http://localhost/devicesAdd', {
          params: {
            device_name: device_name,
            product_id: product_id,
            status: status
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeDevice(id) {
      var device_name = prompt('请输入设备名')
      var product_id = prompt('请输入管理产品的编号')
      var status = prompt('请输入设备状态')
      if (device_name == '' || product_id == '' || status == '') {
        return alert('请填写完整的信息')
      }
      axios
        .get('http://localhost/devicesChange', {
          params: {
            device_name: device_name,
            product_id: product_id,
            status: status,
            id: id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    delDevice(id) {
      axios
        .get('http://localhost/devicesDel', {
          params: {
            id: id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    list_orders() {
      this.checkOrder()
      this.$refs.orders_table1.style.display = 'none'
      this.$refs.orders_table.style.display = 'block'
    },
    search_order_id() {
      axios
        .get('http://localhost/orders')
        .then(res => {
          this.tableData_orders = res.data //数据传递到页面数组
          console.log('订单数据获取成功')

          let orderid_input = this.$refs.orderid_input.value
          if (orderid_input == '') {
            return alert('没有输入')
          }
          let finding_order = this.tableData_orders.find(item => {
            return item.id == orderid_input
          })
          if (finding_order == undefined) {
            return alert('没有该编号的订单数据')
          } else {
            this.tableData_orders = [finding_order]
            this.$refs.orders_table.style.display = 'none'
            this.$refs.orders_table1.style.display = 'block'
          }
        })
        .catch(err => {
          console.log('订单数据获取失败' + err)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addOrder() {
      var buyer = prompt('请输入买家')
      var product_id = prompt('请输入所需产品编号')
      var target_amount = prompt('请输入所需数量')
      var value = prompt('请输入订单额度')
      if (buyer == '' || product_id == '' || target_amount == '' || value == '') {
        return alert('请填写完整的信息')
      }
      axios
        .get('http://localhost/ordersAdd', {
          params: {
            buyer: buyer,
            product_id: product_id,
            target_amount: target_amount,
            status: 0,
            value: value
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeOrder(id) {
      var buyer = prompt('请输入买家')
      var product_id = prompt('请输入所需产品编号')
      var target_amount = prompt('请输入所需数量')
      var status = prompt('请输入订单状态')
      var value = prompt('请输入订单额度')
      if (buyer == '' || product_id == '' || target_amount == '' || value == '') {
        return alert('请填写完整的信息')
      }
      axios
        .get('http://localhost/ordersChange', {
          params: {
            buyer: buyer,
            product_id: product_id,
            target_amount: target_amount,
            status: status,
            value: value,
            id: id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    delOrder(id) {
      axios
        .get('http://localhost/ordersDel', {
          params: {
            id: id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkOrder() {
      axios
        .get('http://localhost/orders')
        .then(res => {
          this.tableData_orders = res.data
        })
        .catch(err => {
          console.log(err)
        })

      axios
        .get('http://localhost/products')
        .then(res => {
          this.tableData_products = res.data
        })
        .catch(err => {
          console.log(err)
        })

      let str = ''

      for (let i = 0; i < this.tableData_orders.length; i++) {
        var target = this.tableData_products.find(item => item.id == this.tableData_orders[i].product_id)
        if (target != undefined) {
          if (target.amount >= this.tableData_orders[i].target_amount) {
            str += this.tableData_orders[i].id + '/'
            this.tableData_orders[i].status = 1
            axios
              .get('http://localhost/ordersChange', {
                params: {
                  buyer: this.tableData_orders[i].buyer,
                  product_id: this.tableData_orders[i].product_id,
                  target_amount: this.tableData_orders[i].target_amount,
                  status: 1,
                  value: this.tableData_orders[i].value,
                  id: this.tableData_orders[i].id
                }
              })
              .catch(err => {
                console.log(err)
              })
          }
        }
      }
      if (str != '') {
        alert('订单' + str + '已完成,在订单管理栏查看并操作')
      }
    },

    list_generateplan() {
      axios
        .get('http://localhost/generateplan')
        .then(res => {
          this.tableData_generateplan = res.data //数据传递到页面数组
          console.log('生产计划数据获取成功')
          this.$refs.generateplan_table1.style.display = 'none'
          this.$refs.generateplan_table.style.display = 'block'
        })
        .catch(err => {
          console.log('生产计划数据获取失败' + err)
        })
    },
    search_generateplan_id() {
      axios
        .get('http://localhost/generateplan')
        .then(res => {
          this.tableData_generateplan = res.data //数据传递到页面数组
          console.log('生产计划数据获取成功')

          let generateplanid_input = this.$refs.generateplanid_input.value
          if (generateplanid_input == '') {
            return alert('没有输入')
          }
          let finding_generateplan = this.tableData_generateplan.find(item => {
            return item.id == generateplanid_input
          })
          if (finding_generateplan == undefined) {
            return alert('没有该编号的生产计划数据')
          } else {
            this.tableData_generateplan = [finding_generateplan]
            this.$refs.generateplan_table.style.display = 'none'
            this.$refs.generateplan_table1.style.display = 'block'
          }
        })
        .catch(err => {
          console.log('生产计划数据获取失败' + err)
        })
    },
    addGenerateplan() {
      var product_id = prompt('请输入所需产品编号')
      var target_amount = prompt('请输入所需数量')
      var existing_amount = prompt('请输入已有产品数量')
      var deadline = prompt('请输入截止时间')
      var start_time = prompt('请输入开始时间')
      var factory_id = prompt('请输入执行生产计划的工厂编号')
      if (product_id == '' || target_amount == '' || existing_amount == '' || deadline == '' || start_time == '' || factory_id == '') {
        return alert('请填写完整的信息')
      }
      axios
        .get('http://localhost/generateplanAdd', {
          params: {
            product_id: product_id,
            target_amount: target_amount,
            existing_amount: existing_amount,
            deadline: deadline,
            start_time: start_time,
            status: 0,
            factory_id: factory_id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeGenerateplan(id) {
      var product_id = prompt('请输入所需产品编号')
      var target_amount = prompt('请输入所需数量')
      var existing_amount = prompt('请输入已有产品数量')
      var deadline = prompt('请输入截止时间')
      var start_time = prompt('请输入开始时间')
      var status = prompt('请输入生产计划状态')
      var factory_id = prompt('请输入执行生产计划的工厂编号')
      if (product_id == '' || target_amount == '' || existing_amount == '' || deadline == '' || start_time == '' || factory_id == '') {
        return alert('请填写完整的信息')
      }
      axios
        .get('http://localhost/generateplanChange', {
          params: {
            product_id: product_id,
            target_amount: target_amount,
            existing_amount: existing_amount,
            deadline: deadline,
            start_time: start_time,
            status: status,
            factory_id: factory_id,
            id: id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    delGenerateplan(id) {
      axios
        .get('http://localhost/generateplanDel', {
          params: {
            id: id
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    submit() {
      let submit_productid = this.$refs.submit_productid.value
      let submit_amountall = this.$refs.submit_amountall.value
      let submit_amountgood = this.$refs.submit_amountgood.value
      if (submit_productid == '' || submit_amountall == '' || submit_amountgood == '') {
        return alert('信息未填完整')
      }
      // 修改产品表里的产品数量数据
      axios
        .get('http://localhost/products')
        .then(res => {
          this.tableData_products = res.data

          var target = this.tableData_products.find(item => item.id == submit_productid)
          if (target == undefined) {
            return alert('没有这个编号的产品')
          }
          axios
            .get('http://localhost/productsChange', {
              params: {
                product_name: target.product_name,
                amount: target.amount + parseInt(submit_amountgood),
                price: target.price,
                id: submit_productid
              }
            })
            .then(alert('记录成功'))
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })

      // 修改生产计划里的产品数量数据
      axios
        .get('http://localhost/generateplan')
        .then(res => {
          this.tableData_generateplan = res.data //数据传递到页面数组

          var target = this.tableData_generateplan.find(item => item.product_id == submit_productid)
          if (target != undefined) {
            if (target.existing_amount + parseInt(submit_amountgood) >= target.target_amount) {
              alert('生产计划' + target.id + '已经完成,在生产计划管理栏查看并操作')
              target.status = 1
            }

            axios
              .get('http://localhost/generateplanChange', {
                params: {
                  product_id: target.product_id,
                  target_amount: target.target_amount,
                  existing_amount: target.existing_amount + parseInt(submit_amountgood),
                  deadline: target.deadline,
                  start_time: target.start_time,
                  status: target.status,
                  factory_id: target.factory_id,
                  id: target.id
                }
              })
              .catch(err => {
                console.log(err)
              })
          }
        })
        .catch(err => {
          console.log(err)
        })

      this.checkOrder()
    },

    change1() {
      document.querySelector('.content_factory').style.display = 'block'
      document.querySelector('.content_device').style.display = 'none'
      document.querySelector('.content_product').style.display = 'none'
      document.querySelector('.content_order').style.display = 'none'
      document.querySelector('.content_GeneratePlan').style.display = 'none'
      document.querySelector('.content_GenerateSchedule').style.display = 'none'
    },
    change2() {
      document.querySelector('.content_factory').style.display = 'none'
      document.querySelector('.content_device').style.display = 'block'
      document.querySelector('.content_product').style.display = 'none'
      document.querySelector('.content_order').style.display = 'none'
      document.querySelector('.content_GeneratePlan').style.display = 'none'
      document.querySelector('.content_GenerateSchedule').style.display = 'none'
    },
    change3() {
      document.querySelector('.content_factory').style.display = 'none'
      document.querySelector('.content_device').style.display = 'none'
      document.querySelector('.content_product').style.display = 'block'
      document.querySelector('.content_order').style.display = 'none'
      document.querySelector('.content_GeneratePlan').style.display = 'none'
      document.querySelector('.content_GenerateSchedule').style.display = 'none'
    },
    change4() {
      document.querySelector('.content_factory').style.display = 'none'
      document.querySelector('.content_device').style.display = 'none'
      document.querySelector('.content_product').style.display = 'none'
      document.querySelector('.content_order').style.display = 'block'
      document.querySelector('.content_GeneratePlan').style.display = 'none'
      document.querySelector('.content_GenerateSchedule').style.display = 'none'
    },
    change5() {
      document.querySelector('.content_factory').style.display = 'none'
      document.querySelector('.content_device').style.display = 'none'
      document.querySelector('.content_product').style.display = 'none'
      document.querySelector('.content_order').style.display = 'none'
      document.querySelector('.content_GeneratePlan').style.display = 'block'
      document.querySelector('.content_GenerateSchedule').style.display = 'none'
    },
    change6() {
      document.querySelector('.content_factory').style.display = 'none'
      document.querySelector('.content_device').style.display = 'none'
      document.querySelector('.content_product').style.display = 'none'
      document.querySelector('.content_order').style.display = 'none'
      document.querySelector('.content_GeneratePlan').style.display = 'none'
      document.querySelector('.content_GenerateSchedule').style.display = 'block'
    }
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  left: 250px;
  width: 975px;
  height: 700px;
  border-radius: 33px;
  background: #fff;
  z-index: 1;
}

.content_factory,
.content_device,
.content_product,
.content_order,
.content_GeneratePlan,
.content_GenerateSchedule {
  width: 975px;
  height: 700px;
  display: none;
}

.content_factory {
  display: block;
}

/* From uiverse.io by @alexruix */

.input-group {
  position: absolute;
  left: 60px;
  top: 27px;
}

.generateSchedule1 {
  position: absolute;
  left: 300px;
  top: 100px;
}
.generateSchedule2 {
  position: absolute;
  left: 300px;
  top: 200px;
}
.generateSchedule3 {
  position: absolute;
  left: 300px;
  top: 300px;
}
.input {
  width: 300px;
  height: 44px;
  background-color: #05060f0a;
  border-radius: 0.5rem;
  padding: 0 1rem;
  border: 2px solid transparent;
  font-size: 1rem;
  transition: border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s, color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s, background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
}

.label {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #05060f99;
  transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
}

.input:hover,
.input:focus,
.input-group:hover .input {
  outline: none;
  border-color: #05060f;
}

.input-group:hover .label,
.input:focus {
  color: #05060fc2;
}

/* 查询等按钮的样式 */
.content_button {
  padding: 15px 25px;
  border: unset;
  border-radius: 10px;
  color: #212121;
  z-index: 1;
  background: #e8e8e8;
  position: absolute;
  top: 43px;
  left: 450px;
  font-weight: 1000;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
}

.content_button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 10px;
  background-color: #212121;
  z-index: -1;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
}

.content_button:hover {
  color: #e8e8e8;
  cursor: pointer;
}

.content_button:hover::before {
  width: 100%;
}

.list {
  left: 660px;
}

.graphics {
  left: 800px;
}

.search {
  left: 440px;
}

.add {
  left: 550px;
}

.delate {
  left: 750px;
}

.followorder {
  top: 120px;
  left: 330px;
}

.report {
  top: 120px;
  left: 470px;
}

.orderdown {
  top: 120px;
  left: 610px;
}

.plandown {
  top: 120px;
  left: 750px;
}

.submit {
  position: absolute;
  left: 427px;
  top: 450px;
}
</style>