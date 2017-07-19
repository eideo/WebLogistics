<template>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
        <el-table-column
                prop="orderCustomer.serial_number"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="orderCustomer.send_name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="orderCustomer.send_phone"
                label="地址">
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
                })
            }
        }
    };
</script>