<template>
    <el-row type="flex" justify="center">
        <el-col :span="22">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="寄件姓名" prop="send_name">
                            <el-input v-model="ruleForm.send_name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="手机号" prop="send_phone">
                            <el-input v-model="ruleForm.send_phone"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="地址" prop="send_addr">
                            <el-cascader :options="options" v-model="ruleForm.send_addr"
                                         style="width: 100%;"></el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="详细地址" prop="send_addr_info">
                            <el-input type="textarea" v-model="ruleForm.send_addr_info"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8">
                        <el-form-item label="寄件姓名" prop="recive_name">
                            <el-input v-model="ruleForm.recive_name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="手机号" prop="recive_phone">
                            <el-input v-model="ruleForm.recive_phone"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="地址" prop="recive_addr">
                            <el-cascader :options="options" v-model="ruleForm.recive_addr"
                                         style="width: 100%;"></el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" >
                        <el-form-item label="详细地址" prop="recive_addr_info">
                            <el-input type="textarea" v-model="ruleForm.recive_addr_info"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item label="配送方式" prop="dispatching_type">
                    <el-radio-group v-model="ruleForm.dispatching_type">
                        <el-radio class="radio" label="配送"></el-radio>
                        <el-radio class="radio" label="自提"></el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="预计发货日期" prop="send_time">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.send_time"
                                    style="width: 100%;"></el-date-picker>
                </el-form-item>

                <el-form-item label="限时到达日期" prop="recive_time">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.recive_time"
                                    style="width: 100%;"></el-date-picker>
                </el-form-item>


                <el-form-item
                        v-for="(good, index) in ruleForm.goods"
                        :label="'货物清单' + ++index "
                        :key="good.key">
                    <el-row>
                        <el-col :span="4">
                            <el-input v-model="good.name" placeholder="货物名称"/>
                        </el-col>
                        <el-col :span="4">
                            <el-input v-model="good.size" placeholder="尺寸"/>
                        </el-col>
                        <el-col :span="5">
                            <el-input v-model="good.weight" placeholder="重量（吨）"/>
                        </el-col>
                        <el-col :span="4">
                            <el-input v-model="good.number" placeholder="数量"/>
                        </el-col>
                        <el-col :span="4">
                            <el-input v-model="good.freight" placeholder="运费"/>
                        </el-col>
                        <el-col :span="4">
                            <el-input type="textarea" v-model="good.remark" placeholder="备注"/>
                        </el-col>
                        <el-button @click.prevent="removeGoods(good)">删除</el-button>
                    </el-row>
                </el-form-item>

                <el-button @click="addGoods">新增货物</el-button>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script>
    import {regionData} from 'element-china-area-data'

    export default {
        data() {
            return {
                options: regionData,
                ruleForm: {
                    send_name: '',
                    send_phone: '',
                    send_time: '',
                    send_addr: [],
                    send_addr_info: '',
                    recive_name: '',
                    recive_phone: '',
                    recive_time: '',
                    recive_addr: [],
                    recive_addr_info: '',
                    dispatching_type: '',
                    send_time: '',
                    recive_time: '',
                    goods: [
                        {
                            name: '',
                            size: '',
                            weight: '',
                            number: '',
                            freight: '',
                            remark: ''
                        }
                    ]
                },
                rules: {
                    send_name: [
                        {required: true, message: '请输姓名'},
                        {min: 2, max: 5, message: '长度在 2 到 5 个字符'}
                    ],
                    send_phone: [
                        {required: true, message: '请填写手机号码'}
                    ],
                    send_time: [
                        {type: 'date', required: true, message: '请选择日期'}
                    ],
                    send_addr: [
                        {required: true, message: '请输入地址'}
                    ],
                    send_addr_info: [
                        {required: true, message: '请输入详细地址'}
                    ],
                    recive_name: [
                        {required: true, message: '请输姓名'},
                        {min: 2, max: 5, message: '长度在 2 到 5 个字符'}
                    ],
                    recive_phone: [
                        {required: true, message: '请填写手机号码'}
                    ],
                    recive_time: [
                        {type: 'date', required: true, message: '请选择日期'}
                    ],
                    recive_addr: [
                        {required: true, message: '请输入地址'}
                    ],
                    recive_addr_info: [
                        {required: true, message: '请输入详细地址'}
                    ],
                    dispatching_type: [
                        {required: true, message: '请选择配送方式'}
                    ]
                }
            };
        },
        methods: {
            removeGoods(item) {
                var index = this.ruleForm.goods.indexOf(item)
                if (index !== -1) {
                    this.ruleForm.goods.splice(index, 1)
                }
            },
            addGoods() {
                this.ruleForm.goods.push({
                    name: "",
                    size: "",
                    weight: "",
                    number: "",
                    freight: "",
                    remark: "",
                    key: Date.now()
                });
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>