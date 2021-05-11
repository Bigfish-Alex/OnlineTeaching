<template>
	<view>
		<view class="info_warp">
			<view class="user_container">
				<image class="avatar" src="../../static/img/mine/avatar.png" mode="widthFix"></image>
				<view class="userinfo">
					<view class="username">用户名</view>
					<view class="account">188********</view>
				</view>
			</view>
		</view>
		
		<view class="menu_bar">
			<view class="bar">
				<image src="../../static/img/mine/menu_01.png" mode="widthFix" class="icon"></image>
				我的收益
				<image src="../../static/img/more.png" mode="widthFix" class="more"></image>
			</view>
			<view class="bar">
				<image src="../../static/img/mine/menu_02.png" mode="widthFix" class="icon"></image>
				优惠卷
				<image src="../../static/img/more.png" mode="widthFix" class="more"></image>
			</view>
			<view class="bar">
				<image src="../../static/img/mine/menu_03.png" mode="widthFix" class="icon"></image>
				关于
				<image src="../../static/img/more.png" mode="widthFix" class="more"></image>
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
	page{
		background: $mainBgColor;
	}
	.menu_bar{
		margin-top: 20upx;
		.bar{
			display: flex;
			align-items: center;
			height: 100upx;
			background: #FFFFFF;
			box-sizing: border-box;
			padding-left: 100upx;
			font-size: 30upx;
			color: #333333;
			position: relative;
			.icon{
				width: 42upx;
				height: 46upx;
				position: absolute;
				top: 50%;
				left: 30upx;
				transform: translateY(-50%);
			}
			.more{
				width: 24upx;
				height: 24upx;
				position: absolute;
				top: 50%;
				right: 20upx;
				transform: translateY(-50%);
			}
		}
		.bar:after{
			content: '';
			display: block;
			height: 1px;
			background: #e5e5e5;
			position: absolute;
			bottom: 0;
			left: 20upx;
			width: 100%;
			right: 0;
			transform: scaleY(0.5);
		}
		.bar:last-child:after{
			height: 0;
		}
	}
	.info_warp{
		box-sizing: border-box;
		padding: 140upx 40upx 100upx;
		background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
	}
	.user_container{
		display: flex;
		.avatar{
			width: 100upx;
			height: 100upx;
		}
		.userinfo{
			color: #FFFFFF;
			box-sizing: border-box;
			padding: 2upx 0 0 30upx;
			.username{
				font-size: 40upx;
			}
			.account{
				font-size: 28upx;
			}
		}
	}
</style>
