import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
  Vue.prototype.$message = Element.Message
  Vue.use(Element, { locale })
}