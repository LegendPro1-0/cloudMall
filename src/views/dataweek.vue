<template>
    <div class="dataweek">

        <div ref="showElem" class="showContainer"></div>
    </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { defineComponent, onMounted,ref} from 'vue';
const showElem = ref();
defineComponent({
    name:'DataWeekView'
});
onMounted(()=>{
    console.log(123);
   // 基于准备好的dom，初始化echarts实例
   var myChart = echarts.init(showElem.value);

// 指定图表的配置项和数据
var option = {
  title: {
    text: '周报表'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
})

</script>


<style lang="scss" scoped>
.dataweek{
    display: flex;
    justify-content: center;
    align-items: center;
}
.showContainer{
    width: 600px;
    height: 500px;
}
</style>