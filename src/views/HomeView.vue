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

export default {
  name: 'HomeView',
  components: { ContactInfoItem },
  data: function () {
    return {
      itemDataList: []
    }
  },
  methods: {
    getNativeContacts: function () {
      console.log('getNativeContacts')
      const result = window.AndroidJSBridge.androidNativeGetContacts('H5-Android-调用')
      console.log('返回', result)
      this.itemDataList = JSON.parse(result)
      console.log('JSON.parse', this.itemDataList)
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  padding-top: 18px;
  justify-content: center;
  align-items: center;
}

.home-get-contacts {
  color: white;
  width: 220px;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 12px;
  background-color: #3700b3;
  border-radius: 18px;
}

.home-contact-item {
  margin-top: 6px;
}

</style>
