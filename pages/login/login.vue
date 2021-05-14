<template>
	<view>
		<image src="../../static/img/icon.jpeg" mode="widthFix" class="icon"></image>
		<view class="title">
			在线课程学习
		</view>
		<view class="sec_title">
			随时随地学习，不断提升技能
		</view>
		<navigator url="../mine/about_us">
			关于我们
			<image src="../../static/img/b_more.png" mode="widthFix"></image>
		</navigator>

		<view class="auth_tips">
			微信授权或手机号登录后,可以进行以下操作
			<br>1.观看视频课程
			<br>2.记录浏览过的课程
			<br>3.记录课程学习进度
		</view>

		<view class="login_btn" @click="isShowWxAuthMask=true">
			微信授权登录
		</view>

		<view class="no_login" @click="toIndex">
			暂不登录，随便看看
		</view>

		<view class="get_wx_info_mask" v-if="isShowWxAuthMask">
			<view class="content_warp">
				<view class="top_tips">
					<text>微信授权提示</text>
					<image src="../../static/img/auth.png" mode="widthFix" class="bg"></image>
					<image @click="isShowWxAuthMask=false" src="../../static/img/close.png" mode="widthFix" class="close"></image>
				</view>
				<view class="auth_intro">
					此操作将获取您的头像和昵称显示到程序界面,为了更好的服务,请开启授权
				</view>
				<view class="get_wx_info_btn" @click="toIndex">
					允许
				</view>
				<view class="cancel" @click="isShowWxAuthMask=false">
					取消操作
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowWxAuthMask:false
			}
		},
		methods: {
			toIndex() {
				uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/scss/mixin.scss';

	.get_wx_info_mask {
		@include fix-mask;

		.content_warp {
			@include mask-content-center;
			background-color: #FFFFFF;
			width: 80%;

			.auth_intro {
				color: #999;
				font-size: 30upx;
				padding: 30upx 30upx 40upx;
			}

			.get_wx_info_btn {
				width: 90%;
				height: 90upx;
				line-height: 90upx;
				background: $mainColor;
				color: #FFFFFF;
				display: block;
				margin: 0 auto 40upx;
				border-radius: 90upx;
				box-shadow: 0upx 10upx 24upx -10upx blueviolet;
			}

			.cancel {
				color: #999;
				margin-bottom: 40upx;
				font-size: 28upx;
			}

			.top_tips {
				background: $mainColor;
				color: #FFFFFF;
				height: 340upx;
				position: relative;

				.close {
					width: 40upx;
					height: 40upx;
					position: absolute;
					top: 40upx;
					right: 40upx;
				}

				.bg {
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 70%;
				}

				text {
					font-size: 40upx;
					padding-top: 40upx;
					display: inline-block;
				}
			}
		}
	}

	page {
		background: #FFFFFF;
		text-align: center;
	}

	.login_btn {
		width: 90%;
		height: 90upx;
		line-height: 90upx;
		background: $mainColor;
		color: #FFFFFF;
		display: block;
		margin: 0 auto 30upx;
		border-radius: 90upx;
		box-shadow: 0upx 10upx 24upx -10upx blueviolet;
	}

	.no_login {
		color: #999999;
		font-size: 28upx;
	}

	.auth_tips {
		color: #666;
		font-size: 28upx;
		line-height: 40upx;
		margin-bottom: 70upx;
		margin-top: 80upx;
	}

	.icon {
		width: 400upx;
		height: 400upx;
		margin-top: 100upx;
	}

	.title {
		font-size: 40upx;
		font-weight: bold;
		margin-bottom: 8upx;
	}

	.sec_title {
		font-size: 30upx;
		color: #333333;
	}

	navigator {
		margin: 30upx auto;
		color: $mainColor;
		font-size: 28upx;

		image {
			width: 24upx;
			margin-left: 0upx;
			position: relative;
			top: 1upx;
		}
	}
</style>
