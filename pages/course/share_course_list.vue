<template>
	<view>
		<view class="banner">
			<image src="../../static/img/course/share_poster.jpeg" mode="widthFix"></image>
		</view>
		<view class="list_container">
			<view class="course" v-for="item in course">
				<view class="course_poster">
					<image src="../../static/img/index/course_demo.png" mode="widthFix"></image>
				</view>
				<view class="course_info">
					<view class="course_title">
						高级母婴护理师
					</view>
					<view class="course_intro">
						高级讲师带你轻松做月嫂
					</view>
					<view class="course_sale_info">
						<text class="price red">¥3999.00</text>
						<text class="share">立即分享</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="hover_service" @click="isShowContact=true">
			<image src="../../static/img/service.png" mode="widthFix"></image>
			<text>联系老师</text>
		</view>
		
		<view class="contact_mask" v-show="isShowContact">
			<view class="mask_content">
				<view class="top_info">
					<image class="avatar" src="../../static/img/mine/avatar.png" mode="widthFix"></image>
					<view class="teacher">
						<text>张老师</text>
						<text>18800000000</text>
					</view>
					<view class="shop">
						家政中心
					</view>
				</view>
				<view class="bottom_info">
					<view class="tips">
						如果对课程有任何疑问，可以直接联系我们，我们将竭尽全力为你解决技能、工作机会的问题
					</view>
					<view class="button_container">
						<view class="b_button">
							复制手机号加微信
						</view>
						<view class="w_button">
							拨打电话联系老师
						</view>
					</view>
				</view>
				<image @click="isShowContact=false" class="close" src="../../static/img/close.png" mode="widthFix"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				course:[1,2,3,4,5,6,7,8,9,10],
				isShowContact:false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background: #e8534c;
}
.banner{
	border-radius: 0 0 100upx 100upx;
	overflow: hidden;
	image{
		width: 100%;
		display: block;
		height: 500upx;
	}
}
.list_container{
	box-sizing: border-box;
	padding: 30upx 20upx;
	background: #FFFFFF;
	width: 94%;
	margin: -40upx auto 20upx;
	border-radius: 10upx;
	position: relative;
	z-index: 2;
	.course{
		display: flex;
		position: relative;
		padding-bottom: 20upx;
		margin-bottom: 25upx;
		.course_poster{
			flex-basis: 250upx;
			image{
				width: 100%;
			}
		}
		.course_info{
			flex-grow: 1;
			width: 0;
			box-sizing: border-box;
			padding: 0upx 0 0 14upx;
			.course_title{
				font-size: 32upx;
				font-weight: bold;
			}
			.course_intro{
				font-size: 28upx;
				color: #999;
				margin-top: 10upx;
			}
			.course_sale_info{
				font-size: 28upx;
				margin-top: 16upx;
				.sold{
					color: #666;
					margin-left: 60upx;
				}
				.share{
					background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
					color: #FFFFFF;
					padding: 5upx 10upx;
					float: right;
					margin-right: 20upx;
					border-radius: 5upx;
				}
			}
		}
	}
	.course:after{
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 1upx;
		background: $mainBgColor;
	}
	.course:last-child:after{
		background: none;
	}
}

.hover_service{
	position: fixed;
	bottom: 100upx;
	right: 30upx;
	text-align: center;
	font-size: 24upx;
	z-index: 2;
	image{
		width: 110upx;
		height: 110upx;
		display: block;
	}
	text{
		background: #FFFFFF;
		padding: 6upx 10upx;
		border-radius: 8upx;
		background: $mainColor;
		color: #FFFFFF;
		font-style: italic;
	}
}
</style>
