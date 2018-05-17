<template>
	<div class="top">
		<div>
			<mt-header fixed  :title="onedata.hp_title">
				<div slot="left" @click="backa()">
			    <mt-button icon="back"></mt-button>
			  </div>
			  
			</mt-header>
			
		</div>
		
		<div class="wz">
			<p class="weui-media-box__title">{{onedata.hp_title}}</p>
			<p class="weui-media-box__desc">文/{{onedata.hp_author}}</p>
			<div class="text" v-html="onedata.hp_content"></div>
		</div>
		<div class="weui-panel weui-panel_access">
		  <div class="weui-panel__hd">作者</div>
		  <div class="weui-media-box weui-media-box_appmsg" v-for="itm in onedata.author">
		  	
		
		<div class="weui-media-box__hd">
		        <img class="weui-media-box__thumb" v-lazy="itm.web_url" width="60">
		  </div>
		<ul class="weui-media-box__info">
			      	<li class="weui-media-box__info__meta">{{itm.user_name}}</li>
			      	<li class="weui-media-box__info__meta ">{{itm.summary}}</li>
		</ul>
		 </div>
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
  name: 'xianxi',
  data () {
    return {
      item_id:'',
      onedata:'',
      onedatapl:'',
     
    }
  },
  methods:{
  	shujua(){
  		axios({
		  method:'get',
		  url: 'http://v3.wufazhuce.com:8000/api/essay/' + this.item_id + '?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
		})
		.then(response => {
			this.onedata=response.data.data;
		 //console.log(response.data);
		})

  	},
  shujub(){
  	axios({
		  method:'get',
		  url: 'http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/ '+ this.item_id + '/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
		})
		.then(response => {
			this.onedatapl=response.data.data;
		 //console.log(this.onedatapl);
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
  	this. shujub();
  }
  	
}
</script>
<style scoped>
.top{
	margin-top: 50px;
}
.weui-media-box__info li{
	line-height: 2rem;
}
.wz{
	width: 90%;
	margin:0 auto;
}
.wz .text{
	font-size: 14px;
	
}
</style>