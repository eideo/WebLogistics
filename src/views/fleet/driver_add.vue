<template>
    <el-row type="flex" justify="center" v-loading.body="listLoading" element-loading-text="拼命加载中">
        <el-col :span="22">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="请输入司机姓名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="手机号" prop="phone">
                            <el-input v-model="ruleForm.phone" placeholder="司机APP客户端登录用户名"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="APP登录密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password" placeholder="司机APP客户端登录密码"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="任务短信通知">
                            <el-switch v-model="ruleForm.is_sms" on-text="是" off-text="否"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="性别" prop="sex">
                            <el-radio-group v-model="ruleForm.sex">
                                <el-radio class="radio" label="男"></el-radio>
                                <el-radio class="radio" label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="身份证">
                            <el-input v-model="ruleForm.idcard"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="籍贯">
                            <el-input v-model="ruleForm.hometown"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="邮箱">
                            <el-input v-model="ruleForm.email"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="备注">
                            <el-input type="textarea" v-model="ruleForm.remark"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>


                <!--<el-row>-->
                    <!--<el-col>-->
                        <!--<el-form-item-->
                                <!--v-for="(license, index) in ruleForm.other_license"-->
                                <!--:label="'货物清单' + ++index "-->
                                <!--:key="license.key">-->
                            <!--<el-row>-->
                                <!--<el-col :span="4">-->
                                    <!--<el-input v-model="license.number" placeholder="货物名称"/>-->
                                <!--</el-col>-->
                                <!--<el-col :span="4">-->
                                    <!--<el-input v-model="license.type" placeholder="尺寸"/>-->
                                <!--</el-col>-->
                                <!--<el-col :span="5">-->
                                    <!--<el-input v-model="license.pass_time" placeholder="重量（吨）"/>-->
                                <!--</el-col>-->
                                <!--<el-col :span="4">-->
                                    <!--<el-input v-model="license.valid_date" placeholder="数量"/>-->
                                <!--</el-col>-->
                                <!--<el-col :span="4">-->
                                    <!--<el-input v-model="license.unvalide_date" placeholder="运费"/>-->
                                <!--</el-col>-->
                                <!--<el-col :span="4">-->
                                    <!--<el-form-item label="备注">-->
                                        <!--<el-input type="textarea" v-model="license.remark"></el-input>-->
                                    <!--</el-form-item>-->
                                <!--</el-col>-->
                                <!--<el-button @click.prevent="removeLicense(license)">删除</el-button>-->
                            <!--</el-row>-->
                        <!--</el-form-item>-->

                        <!--<el-button @click="addLicense">新增证件</el-button>-->
                    <!--</el-col>-->
                <!--</el-row>-->

                <el-row>
                    <el-col>
                        <el-row v-for="(license, index) in ruleForm.other_license" >
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="证件编号">
                                        <el-input v-model="license.number"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="证件类型">
                                        <el-input v-model="license.type"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="办证日期">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="license.pass_time"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="有效日期">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="license.valid_date"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="附件">
                                        <el-input v-model="license.files"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="有效日期止">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="license.unvalide_date"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="备注">
                                        <el-input type="textarea" v-model="license.remark"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                                <el-button @click.prevent="removeLicense(license)">删除</el-button>
                        </el-row>

                        <el-button @click="addLicense">新增证件</el-button>
                    </el-col>
                </el-row>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>

    </el-row>
</template>
<script>
    import { addDriverEx } from '@/api/driver';

    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    sex: '',
                    phone: '',
                    password: '',
                    is_sms: false,
                    idcard: '',
                    email: '',
                    hometown: '',
                    remark: '',

                    license_number: '',
                    license_level: '',
                    license_valid_time: '',
                    license_unvalid_time: '',
                    license_pass_time: '',
                    license_work_license: '',
                    license_ic_number: '',
                    license_files: '',
                    license_time: '',

                    other_license:[]
                },
                rules: {
                    name: [
                        {required: true, message: '请输姓名'},
                        {min: 2, max: 5, message: '长度在 2 到 5 个字符'}
                    ],
                    phone: [
                        {required: true, message: '请填写手机号码'},
                        {min: 11,max: 11, message: '手机号码长度为11位'}
                    ],
                    password: [
                        {required: true, message: '请填写密码'},
                        {min: 6, message: '密码长度不能小于6位'}
                    ],
                    sex: [
                        {required: true, message: '请选择性别'}
                    ]
                },
                listLoading: false
            };
        },
        methods: {
            removeLicense(item) {
                var index = this.ruleForm.other_license.indexOf(item)
                if (index !== -1) {
                    this.ruleForm.other_license.splice(index, 1)
                }
            },
            addLicense() {
                this.ruleForm.other_license.push({
                    number: '',
                    type: '',
                    pass_time: null,
                    valid_date: null,
                    unvalide_date: null,
                    files: '',
                    remark: ''
                });
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.listLoading = true;
                        addDriverEx(this.ruleForm).then(response => {
                            this.listLoading = false;
                            this.$message({
                                type: 'success',
                                message: '添加成功!'
                            });
                        },
                        error =>{
                            this.listLoading = false;
                        });
                    } else {
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