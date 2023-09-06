<template>
  <div class="contact-info">
    <div class="contact-info-name">{{ contactInfo['contactName'] }}</div>
    <div class="contact-info-number">{{ contactInfo['contactNumber'] }}</div>
    <div class="contact-info-call" @click="call">拨打</div>
  </div>

</template>

<script>
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
      window.AndroidJSBridge.androidNativeCallPhone(this.contactInfo.contactNumber)
    }
  }
}
</script>

<style scoped>

.contact-info {
  padding-left: 12px;
  padding-right: 12px;
  justify-content: center;
  display: flex;
  flex-direction: row;
}

.contact-info-name {
  color: red;
}

.contact-info-number {
  color: red;
  margin-left: 30px;
  margin-top: 4px;
}

.contact-info-call {
  color: white;
  width: 50px;
  text-align: center;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 12px;
  font-size: 12px;
  background-color: green;
  margin-left: 20px;
  border-radius: 18px;
}

</style>
