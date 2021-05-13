<template>
	<view>
		<view class="course_poster_intro">
			<image src="../../static/img/index/course_demo.png" mode="widthFix" class="poster"></image>
			<view class="learning">
				王** 正在学习
			</view>
			 <view class="bottom_bar">
			 	张老师邀请您一同学习
				<text>联系老师</text>
			 </view>
		</view>		
		
		<view class="course_title_sec">
			<view class="info_warp">
				<view class="title">
					家政服务入门课-生活小窍门
				</view>
				<view class="sec_title">
					0基础带你入门家政服务
				</view>
				<view class="price">
					<text class="current red">49.9元</text>
					<text class="old">原价299元</text>
				</view>
			</view>
			<view class="process">
				<view class="per">
					0/10
				</view>
				<view class="begin" @click="toLearn">
					<text>开始学习</text>
				</view>
			</view>
		</view>
		
		<view class="course_tab">
			<view @click="switchTab(0)" :class="[current_tab==0?'active':'']">课程简介</view>
			<view @click="switchTab(1)" :class="[current_tab==1?'active':'']">目录(10个课时)</view>
		</view>
		
		<view class="margin_title" v-if="current_tab==0">
			课程简介
		</view>
		
		<view class="course_intro" v-if="current_tab==0">
			<image src="../../static/img/index/course_demo1.jpeg" mode="widthFix"></image>
			<image src="../../static/img/index/course_demo.png" mode="widthFix"></image>
			<image src="../../static/img/index/course_demo1.jpeg" mode="widthFix"></image>
			<image src="../../static/img/index/course_demo.png" mode="widthFix"></image>
			<image src="../../static/img/index/course_demo1.jpeg" mode="widthFix"></image>
			<image src="../../static/img/index/course_demo.png" mode="widthFix"></image>
		</view>
		
		<view class="course_directory" v-if="current_tab==1">
			<view class="video_list">
				<view class="flex_video_warp" @click="toLearn" v-for="item in course">
					<view class="poster_warp">
						<image src="../../static/img/index/course_demo1.jpeg" class="poster" mode="widthFix"></image>
						<view class="mask">
							<image src="../../static/img/course/play.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="video_info">
						<view class="title">
							第一节 面试前的准备
						</view>
						<view class="time">
							<text>20分20秒</text>
							<text>已看0%</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="empty_bar">
			
		</view>
		
		<view class="footer">
			<view class="discount">
				
			</view>
			<view class="bottom_button">
				<view class="more" @click="toCategory">
					<image src="../../static/img/course/more.png" mode="widthFix"></image>
					更多课程
				</view>
				<view class="side_button">
					<text class="share">分享</text>
					<text class="pay">立即支付</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current_tab:0,
				course:[1,2,3,4,5,6,7,8,9]
			}
		},
		methods: {
			switchTab(_index){
				this.current_tab = _index;
			},
			videoErrorCallback(){
				
			},
			toLearn(){
				uni.navigateTo({
					url:'learning'
				})
			},
			toCategory(){
				uni.navigateTo({
					url:'course_category'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/scss/course.scss'
</style>
