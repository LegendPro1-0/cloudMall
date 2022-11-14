<template>
    <div>
        <el-button type="primary" @click="handleClick()">添加轮播图</el-button>
        <el-table :data="tableData">
            <el-table-column  prop="index" label="名称" min-width="10%" align="center"/>
            <el-table-column label="图片" min-width="20%" prop="baner" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-image :src="scope.row.baner" contain/>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="prompt" label="提示信息" min-width="25%" align="center"/>
            <el-table-column prop="connect" label="上传时间" min-width="25%" align="center"/>
            <el-table-column  label="操作" min-width="20%" align="center">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="handleDelete(scope.row.index)">删除</el-button>
            </template>
            </el-table-column>
            </el-table>

                <el-dialog v-model="dialogFormVisible" title="添加轮播图">
                <el-form :model="form">
                <el-form-item label="图片序号" :label-width="formLabelWidth">
                    <el-input v-model="form.index" autocomplete="off" />
                </el-form-item>
                <el-form-item label="图片地址" :label-width="formLabelWidth">
                    <el-input v-model="form.baner" autocomplete="off" />
                </el-form-item>
                <el-form-item label="提示信息" :label-width="formLabelWidth">
                    <el-input v-model="form.prompt" autocomplete="off" />
                </el-form-item>
                </el-form>
                <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="handleSendbanner">
                    确定
                    </el-button>
                </span>
                </template>
            </el-dialog>


            <el-dialog v-model="centerDialogVisible" title="提示" width="30%" center>
                    <span>
                    确定删除这张轮播图吗
                    </span>
                    <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="handleDe">
                        确定
                        </el-button>
                    </span>
                    </template>
                </el-dialog>
                <div class="demo-pagination-block">
                        <div class="demonstration">每页显示条数</div>
                        <el-pagination
                        v-model:currentPage="currentPage2"
                        v-model:page-size="pageSize2"
                        :page-sizes="[5, 10, 20, 50]"
                        :small="small"
                        :disabled="disabled"
                        :background="background"
                        layout="sizes, prev, pager, next"
                        :total="10"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        />
                        </div>
    </div>
</template>

<script setup>
import { defineComponent,ref,reactive} from 'vue';
defineComponent({
    name:'BannerView'
})

//表格组件
const handleClick = () => {   //传回scope对象的index来修改或删除 scope对象就是tableData数据的映射
    dialogFormVisible.value =true;
}
const handleDelete = (index) => {   //传回scope对象的index来修改或删除 scope对象就是tableData数据的映射
    centerDialogVisible.value =true;
    whichde.value = index;
}
const tableData = [
  {
    index: 1,
    baner: 'https://pic.rmb.bdstatic.com/bjh/75e8132a1c31fedac4e38de030dc4ac7.jpeg',
    prompt: '官方图片',
    connect: '2022-10-12 19:26:36',
  },
  {
    index: 2,
    baner: 'https://pic.rmb.bdstatic.com/bjh/75e8132a1c31fedac4e38de030dc4ac7.jpeg',
    prompt: '官方图片',
    connect: '2022-10-12 19:26:63',
  },
  {
    index: 3,
    baner: 'https://pic.rmb.bdstatic.com/bjh/75e8132a1c31fedac4e38de030dc4ac7.jpeg',
    prompt: '官方图片',
    connect: '2022-10-12 19:26:36',
  },
  {
    index: 4,
    baner: 'https://pic.rmb.bdstatic.com/bjh/75e8132a1c31fedac4e38de030dc4ac7.jpeg',
    prompt: '官方图片',
    connect: '2022-10-12 19:26:63',
  }
]


//表格最后的按钮组件

const dialogFormVisible = ref(false)    //控制弹出框显示隐藏
const formLabelWidth = '140px'     //控制宽度

//添加轮播图的响应式数据。 可以通过form来向后端传递数据，当作payload。发送这个值去更新
const form = reactive({
  index: '',
  baner:'',
  prompt:'',
})

//添加轮播图的事件，这个事件为让添加框消失，然后把数据发送给后端
const handleSendbanner = ()=>{
    dialogFormVisible.value = false;
}

//删除弹出框
const centerDialogVisible = ref(false)
const whichde = ref(0);

const handleDe = ()=>{
    // whichde.value  发送这个值给后端进行删除
    centerDialogVisible.value = false;
}



//分页工具
const currentPage2 = ref(5);
const pageSize2 = ref(5);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<style lang="scss" scoped>

</style>