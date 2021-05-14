<template>
	<view>
		<view class="course_tab">
			<view @click="switchTab(0)" :class="[current_tab==0?'active':'']">我购买过的课程</view>
			<view @click="switchTab(1)" :class="[current_tab==1?'active':'']">浏览过的课程</view>
		</view>
		
		<view class="course_list">
			
			<view class="course_warp" v-if="course.length>0">
				<view class="course" @click="toDetails" v-for="item in course">
					<view class="course_poster">
						<image src="../../static/img/index/course_demo1.jpeg" mode="widthFix"></image>
					</view>
					<view class="course_info">
						<view class="course_title">
							高级母婴护理师
						</view>
						<view class="course_intro">
							高级讲师带你轻松做月嫂
						</view>
						<view class="course_sale_info">
							<text class="total">10个课时</text>
							<text class="price red">¥3999.00</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="empty_tips" v-if="course.length<=0">
				<image src="../../static/img/index/no_course.png" mode="widthFix"></image>
				暂无课程
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current_tab:0,
				course:[1,2,3,4,5,6,7,8,9,10]
			}
		},
		methods: {
			switchTab(_index){
				this.current_tab = _index;
				
				if(_index==0){
					this.course = [1,2,3,4,5,6,7,8,9,10];
				}else{
					this.course = [];
				}
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
