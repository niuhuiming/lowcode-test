import cButton from './cButton'

// 做逻辑层处理
export default {
  name: 'CButton',

  components: {
    cButton
  },

  render() {
    const _this = this
    const _propsOn = {
      nativeOn: {
        click: e => {
          e.stopPropagation()
          _this.$emit('pickType', 'cButton')
        }
      }
    }
    return (
      <cButton
        {..._propsOn}
      ></cButton>
    )
  }
}
