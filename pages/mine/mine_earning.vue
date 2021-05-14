<template>
	<view>
		<view class="earning">
			<view class="earn_total">
				¥ 0.0
			</view>
			<view class="title">
				我的收益
			</view>
		</view>
		<view class="earn_his_container">
			<view class="title">
				收益记录
			</view>
			<view class="line"></view>
			<view class="his_warp">
				<view class="empty_tips">
					<image src="../../static/img/empty.png" mode="widthFix"></image>
					<view class="text">
						暂无收益记录
						<br>
						快去分享课程赚取收益吧！
					</view>
				</view>
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
	page {
		background: $mainBgColor;
	}
	.earn_his_container{
		width: 96%;
		height: calc(100vh - 290upx);
		background: #FFFFFF;
		margin: 20upx auto;
		border-radius: 10upx;
		box-sizing: border-box;
		padding: 20upx;
		.title{
			width: 100%;
			height: 80upx;
			line-height: 80upx;
			padding-bottom: 10upx;
			font-size: 30upx;
		}
	}
	.earning {
		background: $mainColor;
		color: #FFFFFF;
		text-align: center;
		height: 250upx;
		box-sizing: border-box;
		padding-top: 70upx;
		.earn_total{
			font-size: 50upx;
		}
		.title{
			font-size: 28upx;
		}
	}
</style>
