import { defineComponent } from 'vue'
import { useMainStore } from '../../store/main'
import './style.less'
export default defineComponent({
  name: 'IndexComponent',
  setup() {
    const mainStore = useMainStore()
    const updateName = () => {
      mainStore.$patch({
        name: '绝对零度'
      })
    }
    const actionUpdateName = () => {
      mainStore.updatedName('何成龙')
    }
    return () => (
      <div>
        <div class="index-page">index</div>
        <div>姓名：{mainStore.name}， 拼音长度{mainStore.nameLength}个字符串</div>
        <div>
          <button onClick={() => updateName()}>$patch修改name</button>

          <button onClick={() => actionUpdateName()}>actions修改name</button>
        </div>
      </div>
    )
  }
})
