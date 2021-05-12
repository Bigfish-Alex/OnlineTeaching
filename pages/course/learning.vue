<template>
	<view>
		<view class="video_container">
			<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4" @error="videoErrorCallback" controls></video>
		</view>
		<view class="intro_container">
			<view class="title">
				家政服务入门课-生活小窍门
			</view>
			<view class="intro">
				0基础带你入门家政服务,张老师邀请您一同学习
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			videoErrorCallback(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/scss/course.scss'
</style>
