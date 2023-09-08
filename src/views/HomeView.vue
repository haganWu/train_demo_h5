<template>
  <div class="home">
    <div class="home-get-contacts" @click="getNativeContacts">获取联系人</div>
    <div
      v-for="(subItem, subIndex) in itemDataList" :key="subIndex">
      <ContactInfoItem class="home-contact-item" :contact-info="subItem" />
    </div>
  </div>
</template>

<script>
import ContactInfoItem from '@/components/ContactInfoItem'
import { appSource } from '@/utils/CommonUtil'

export default {
  name: 'HomeView',
  components: { ContactInfoItem },

  mounted () {
    /**
     * 前端无法直接通过 window.webkit.messageHandlers.IOSNativeGetContacts 获取联系人列表
     * 需定义一个方法，让iOS回调此方法返回联系人列表数据
     */
    const that = this
    window.onIOSCallbackForContacts = function (contactsList) {
      console.log('接收IOS端返回的联系人数据', contactsList)
      that.itemDataList = contactsList
      console.log('JSON.parse', that.itemDataList)
      return 'onIOSCallbackForContacts 方法已经调用完成'
    }
  },
  data: function () {
    return {
      itemDataList: []
    }
  },
  methods: {
    getNativeContacts: function () {
      console.log('getNativeContacts')
      if (appSource() === 'android') {
        const result = window.AndroidJSBridge.androidNativeGetContacts('H5-Android-调用')
        console.log('返回', result)
        this.itemDataList = JSON.parse(result)
        console.log('JSON.parse', this.itemDataList)
      } else if (appSource() === 'ios') {
        window.webkit.messageHandlers.IOSNativeGetContacts.postMessage({
          msg: 'H5-IOS-调用'
        })
      }
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  padding-top: 18px;
}

.home-get-contacts {
  color: white;
  width: 220px;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 12px;
  align-self: center;
  background-color: #3700b3;
  border-radius: 18px;
}

.home-contact-item {
  margin-top: 6px;
}

</style>
