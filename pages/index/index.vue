<template>
	<view>
		<view class="content">
			<image class="banner" src="../../static/img/index/banner.jpg" mode="widthFix"></image>
		</view>
		<view class="flex_box">
			<view class="flex_item">
				<view class="color_warp">
					<image src="../../static/img/index/01.png" mode="widthFix"></image>
				</view>
				培训拿高薪
			</view>
			<view class="flex_item">
				<view class="color_warp color_2">
					<image src="../../static/img/index/02.png" mode="widthFix"></image>
				</view>
				一键找工作
			</view>
			<view class="flex_item">
				<view class="color_warp color_3">
					<image src="../../static/img/index/03.png" mode="widthFix"></image>
				</view>
				公司介绍
			</view>
			<view class="flex_item">
				<view class="color_warp color_4">
					<image src="../../static/img/index/04.png" mode="widthFix"></image>
				</view>
				推荐赚钱
			</view>
		</view>
		
		<view class="gary_bar"></view>
		
		<view class="wanted_container">
			<view class="leaest_wanted">
				<view class="title">最新岗位</view>
				<view class="swiper_wanted_adv">赵女士已找到保姆工作工资<text class="red">5000元</text> </view>
				<view class="apply_now">
					开始应聘
				</view>
			</view>
			<view class="line"></view>
			<view class="filter_tab">
				<text class="active">3000-5000</text>
				<text>6000-8000</text>
				<text>9000以上</text>
			</view>
			<view class="list_warp">
				<view class="wanted">
					<view class="w_title">
						<text class="job">保姆</text>
						<text class="salary">¥5000</text>
					</view>
					<view class="intro">
						急急招聘住家阿姨照顾不能自理老爷爷胃管月休两天工资 5000元
					</view>
				</view>
				<view class="wanted">
					<view class="w_title">
						<text class="job">保姆</text>
						<text class="salary">¥4000</text>
					</view>
					<view class="intro">
						附近招聘做卫生做饭阿姨上9-5双休工资4000元
					</view>
				</view>
			</view>
		</view>
		
		<view class="gary_bar"></view>
		
		<view class="course_primary">
			<view class="title">
				职业入门
				<view class="more_c" @click="toCategory">
					更多课程
					<image src="../../static/img/more.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="course_primary_flow">
				<view class="course_warp" v-for="(item,index) in arr" @click="toDetails()">
					<image src="../../static/img/index/course_demo1.jpeg" mode="widthFix"></image>
					<view class="course_name">
						家政入门课程{{index}}
					</view>
					<view class="price">
						¥ 49.9
					</view>
				</view>
			</view>
		</view>
		
		<view class="gary_bar"></view>
		
		<view class="line_title">
			<text>高薪岗位  从容就业  专业培训</text>
		</view>
		
		<view class="tab_four">
			<text class="active">月嫂</text>
			<text>育婴师</text>
			<text>养老护理员</text>
			<text>催乳师</text>
			<text>产后康复师</text>
			<text>小儿推拿师</text>
			<text>家政保洁员</text>
		</view>
		
		<view class="hybird_title">
			<view class="c_n_title">
				<text class="title_text">月嫂</text>
				<text class="eng_text">TYPE</text>
			</view>
			<view class="other_info">
				<text class="tag">82943人关注中</text>
				<view class="salary_range red">
					<text class="value">8000元～22000元</text>
					<br>
					<text class="key">薪资范围</text>
				</view>
			</view>
			<view class="title_intro">
				随着二胎放开,市场需求十分巨大,高级月嫂工资也不断 升高,大部分家庭都是提前半年预定高级月嫂,所以高级 月嫂行业发展得非常火爆,被人誉为“金饭碗”
			</view>
		</view>
		
		<view class="hybird_title">
			<view class="c_n_title">
				<text class="title_text">掌握技能</text>
				<text class="eng_text">SKILLS</text>
			</view>
			<view class="title_intro">
				职业概述、新生儿护理、产妇护理、母婴护理实操
			</view>
		</view>
		
		<view class="hybird_title">
			<view class="c_n_title">
				<text class="title_text">推荐课程</text>
				<text class="eng_text">COURSE</text>
			</view>
			<view class="title_intro">
				市场缺口大，就业易，工资高
			</view>
		</view>
		
		
		<view class="recommend_course">
			<view class="course" v-for="item in course" @click="toDetails()">
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				arr:[1,2,3,4],
				course:[1,2,3,4]
			}
		},
		onLoad() {

		},
		methods: {
			toDetails(){
				uni.navigateTo({
					url:'../course/course_details'
				})
			},
			toCategory(){
				uni.navigateTo({
					url:'../course/course_category'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/scss/index.scss'
</style>
