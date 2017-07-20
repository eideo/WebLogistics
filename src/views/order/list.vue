<template>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
        <el-table-column type="expand">
            <template scope="props">
                <el-form label-position="left" class="demo-table-expand">
                    <el-col :span="10">
                        <el-form-item label="订单号">
                            <span>{{ props.row.orderCustomer.order_number }}</span>
                        </el-form-item>
                        <el-form-item label="发货人">
                            <span>{{ props.row.orderCustomer.send_name }}</span>
                        </el-form-item>
                        <el-form-item label="发货人手机号">
                            <span>{{ props.row.orderCustomer.send_name }}</span>
                        </el-form-item>
                        <el-form-item label="发货人地址">
                            <span>{{ props.row.orderCustomer.send_name }}</span>
                        </el-form-item>
                        <el-form-item label="发货人详细地址">
                            <span>{{ props.row.orderCustomer.send_name }}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="订单状态">
                            <span>{{ props.row.orderCustomer.status }}</span>
                        </el-form-item>
                        <el-form-item label="发货人">
                            <span>{{ props.row.orderCustomer.recive_name }}</span>
                        </el-form-item>
                        <el-form-item label="发货人手机号">
                            <span>{{ props.row.orderCustomer.recive_name }}</span>
                        </el-form-item>
                        <el-form-item label="发货人地址">
                            <span>{{ props.row.orderCustomer.recive_name }}</span>
                        </el-form-item>
                        <el-form-item label="发货人详细地址">
                            <span>{{ props.row.orderCustomer.recive_name }}</span>
                        </el-form-item>
                    </el-col>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                prop="orderCustomer.order_number"
                label="订单号">
        </el-table-column>
        <el-table-column
                prop="orderCustomer.send_name"
                label="发货人">
        </el-table-column>
        <el-table-column
                prop="orderCustomer.send_phone"
                label="发货人手机号">
        </el-table-column>
        <el-table-column
                prop="orderCustomer.send_addr"
                label="发货人地址">
        </el-table-column>
        <el-table-column
                prop="orderCustomer.recive_name"
                label="收货人">
        </el-table-column>
        <el-table-column
                prop="orderCustomer.recive_phone"
                label="收货人手机号">
        </el-table-column>
        <el-table-column
                prop="orderCustomer.recive_addr"
                label="收货人地址">
        </el-table-column>
        <el-table-column
                prop="orderCustomer.status"
                label="订单状态">
        </el-table-column>
        <el-table-column label="操作">
            <template scope="scope">
                <el-button size="small" >编辑</el-button>
                <el-button
                        size="small"
                        type="danger" @click="deleteData(scope.$index)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import { getOrderList } from '@/api/order';

    export default {
        data() {
            return {
                list: null,
                listLoading: true
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.listLoading = true;
                getOrderList(this.listQuery).then(response => {
                    this.list = response.data.item;
                    this.listLoading = false;
                });
            },
            deleteData(index) {
                this.$confirm('此操作将永久删除该文件, 是否继续?'+this.list[index].orderCustomer.status, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    };
</script>

<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 150px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
    }
</style>