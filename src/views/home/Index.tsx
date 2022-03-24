import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../../store/main'
import { useOtherStore } from '../../store/otherStore'
import './style.less'
export default defineComponent({
  name: 'IndexComponent',
  setup() {
    const mainStore = useMainStore()
    const otherStore = useOtherStore()
    // 使用$patch
    const updateName = () => {
      mainStore.$patch({
        name: '绝对零度'
      })
    }
    // 直接修改state
    const directUpdateName = () => {
      mainStore.name = '绝对零度+何成龙'
    }
    // 调用actions
    const actionUpdateName = () => {
      mainStore.updatedName('何成龙')
    }
    const restStroe = () => {
      mainStore.$reset()
    }
    // 使用count
    const { count } = storeToRefs(otherStore)
    const computedCount = computed(() => otherStore.count)
    const increaseCount = () => {
      otherStore.count++
    }
    return () => (
      <div>
        <div class="index-page">index</div>
        <div>姓名：{mainStore.name}， 拼音长度{mainStore.nameLength}个字符串</div>
        <div>年龄Plus{mainStore.agePlus}</div>
        <div>

          <button onClick={() => directUpdateName()}>直接修改name</button>

          <button onClick={() => updateName()}>$patch修改name</button>

          <button onClick={() => actionUpdateName()}>actions修改name</button>

          <button onClick={() => restStroe()}>重置数据</button>
        </div>

        <br />

        <div>数量值响应式 {computedCount.value}</div>
        <div>数量值解构式 {count.value}</div>
        <div>数量值 {otherStore.doubleCountPlusOne}</div>
        
        <button onClick={() => increaseCount()}>数量值+1</button>
        
        {/* <button onClick={() => otherStore.doubleCountPlusOne}>数量值*2 + 1</button> */}
      </div>
    )
  }
})
