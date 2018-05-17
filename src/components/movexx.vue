<template>
	<div class="top">
		<div>
			<mt-header fixed  :title="onedata.title">
				<div slot="left" @click="backa()">
			    <mt-button icon="back"></mt-button>
			  </div>
			  
			</mt-header>
			
		</div>
		<div class="banner">
			<mt-swipe :auto="4000" :show-indicators="false">	
						<mt-swipe-item v-for="item in onedata.photo" :key="item.id">
						  <img v-lazy="item" alt="">
						</mt-swipe-item>		
			</mt-swipe>
		</div>
		<div class="wz">
			<p class="weui-media-box__title">{{onedata.title}}</p>
			<p>{{onedata.directors}}</p>
			<p><img width="100%" v-lazy="onedata.poster" alt=""></p>
			<p>{{onedata.info}}</p>
			<p><img width="100%" v-lazy="onedata.detailcover" alt=""></p>
			<div>
				{{onedata.officialstory}}
			</div>
			
			<p>{{onedata.charge_edt}}{{onedata.editor_email}}</p>
		</div>
		<div class="weui-panel weui-panel_access">
		  <div class="weui-panel__hd">评论列表</div>
		  <div class="weui-panel__bd">
		    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="itm in onedatapl.data">
		    <div class="weui-media-box__bd">
		    	<ul class="weui-media-box__info">
			      	<li class="weui-media-box__info__meta"><img style="width:30px;" class="weui-media-box__thumb" v-lazy="itm.user.web_url"></li>
			      	<li class="weui-media-box__info__meta">{{itm.user.user_name}}</li>
		     </ul>

		     	 <div class="weui-media-box__bd hf" v-if='itm.touser'>
			    	<ul class="weui-media-box__info">
				      	<li class="weui-media-box__info__meta"><img style="width:30px;" class="weui-media-box__thumb" v-lazy="itm.touser.web_url"></li>
				      	<li class="weui-media-box__info__meta">{{itm.touser.user_name}}</li>
			     </ul>
			     	
			       <p class="weui-media-box__desc">{{itm.quote}}</p>
			    </div>

		       <p class="weui-media-box__desc">{{itm.content}}</p>
		    </div>
		     
		    </a>
		  </div>
        </div>
	</div>
</template>
<script>
	
	import Vue from 'vue'
	import axios from 'axios'
	export default {
	  name: 'movexx',
	  data () {
	    return {
	      onedata:'',
	      item_id:'',
	      onedatapl:''
	     
	    }
	  },
	  methods:{
	  	shujua(){
	  		axios({
			  method:'get',
			  url: 'http://v3.wufazhuce.com:8000/api/movie/detail/ '+ this.item_id +' ?channel=wdj&source=channel_movie&source_id=9240&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
			})
			.then(response => {
				this.onedata=response.data.data;
				
			})

	  	},
	  	
	  	shujub(){
	  		axios({
			  method:'get',
			  url: 'http://v3.wufazhuce.com:8000/api/comment/praiseandtime/movie/ '+ this.item_id + '/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
			})
			.then(response => {
				this.onedatapl=response.data.data;
				console.log(this.onedatapl)
			})

	  	},
	  	backa(){
	  		window.history.go(-1)
	  	},
	  	
	  },
	  created(){
	  	this.item_id=this.$route.query.item_id;
	  	console.log(this.item_id);
	  	this.shujua();
	  	this.shujub();
	  }
	}
</script>
<style scoped>
.top{
	margin-top: 50px;
}
.banner{
	height: 200px;
}
.banner img{
	width: 100%;
	height: 100%;

}
.hf{
	width: 80%;
	margin:0 auto;
	margin-bottom: 20px;
}
.wz{
	width: 90%;
	margin:0 auto;
	font-size: 14px;
}
.weui-media-box__info li{
	line-height: 2rem;
}
</style>