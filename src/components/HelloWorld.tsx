import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloComponent',
  props: {
    msg: {
      type: String,
      default: '默认按钮'
    }
  },
  setup(props: { msg: string }) {
    return () => <div>{props.msg}</div>
  }
})
