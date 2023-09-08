<template>
  <div class="contact-info">
    <div class="contact-info-name">{{ contactInfo['contactName'] }}</div>
    <div class="contact-info-number">{{ contactInfo['contactNumber'] }}</div>
    <div class="contact-info-call" @click="call">拨打</div>
  </div>

</template>

<script>
import { appSource } from '@/utils/CommonUtil'

export default {
  name: 'ContactInfoItem',
  props: {
    contactInfo: {
      type: Object,
      default: null
    }
  },
  methods: {
    call: function () {
      // 传递电话号码到原生应用实现拨打电话功能
      if (appSource() === 'android') {
        window.AndroidJSBridge.androidNativeCallPhone(this.contactInfo.contactNumber)
      } else if (appSource() === 'ios') {
        window.webkit.messageHandlers.IOSNativeCallPhone.postMessage({
          phone: this.contactInfo.contactNumber
        })
      }
    }
  }
}
</script>

<style scoped>

.contact-info {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 6px;
  padding-bottom: 6px;
}

.contact-info-name {
  color: red;
  width: 80px;
  text-align: start;
  margin-left: 16px;
}

.contact-info-number {
  color: red;
  flex-grow: 1;
  width: 120px;
}

.contact-info-call {
  color: white;
  width: 50px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 12px;
  background-color: green;
  margin-left: 20px;
  margin-right: 16px;
  border-radius: 18px;
}

</style>
