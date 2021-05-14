<template>
	<view>
		<view class="banner">
			<image src="../../static/img/index/banner.jpg" mode="widthFix"></image>
		</view>
		<view class="gary_bar">
			
		</view>
		<view class="about_us">
			<view class="title">
				关于我们
			</view>
			<view class="info">
				帮助家政公司为广大服务人员提供线上学习的课程和平台，让服务人员可以随时随地的学习，不断提供自身技能
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
			
		}
	}
</script>

<style lang="scss">
	.about_us{
		box-sizing: border-box;
		padding: 20upx 30upx;
		.title{
			font-size: 40upx;
			font-weight: bold;
		}
		.info{
			font-size: 28upx;
			color: #666;
			margin-top: 20upx;
		}
	}
	.banner{
		box-sizing: border-box;
		padding: 20upx;
		image{
			display: block;
			width: 100%;
		}
	}
</style>
