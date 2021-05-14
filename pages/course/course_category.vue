<template>
	<view>
		<view class="cate_banner">
			<image src="../../static/img/index/banner.jpg" mode="widthFix"></image>
		</view>
		
		<view class="category_container">
			<view class="left_cate">
				<text class="active">热门推荐</text>
				<text>免费专区</text>
				<text>特价专区</text>
				<text>护理专区</text>
				<text>早教专区</text>
				<text>小儿推拿</text>
				<text>育婴早教</text>
				<text>催乳产康</text>
				<text>其他专区</text>
			</view>
			<view class="course_list" @click="toDetails">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
					<view class="c_title">
						热门推荐
					</view>
					
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
								<text class="sold">已售213件</text>
							</view>
						</view>
					</view>
					
					<view class="c_title">
						免费专区
					</view>
					
					<view class="course" v-for="item in course2">
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
								<text class="sold">已售213件</text>
							</view>
						</view>
					</view>
					
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				course:[0,1,2],
				course2:[0,1,2,3,4,5,6,7]
			}
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon:"none",
					title:"纵向滚动 scrollTop 值已被修改为 0"
				})
			},
			toDetails(){
				uni.navigateTo({
					url:'course_details'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/scss/course.scss'
</style>
