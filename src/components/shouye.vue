<template>
	<div>
		<div class="div">
			<div class="weui-navbar">
			  <div class="weui-navbar__item weui_bar__item_on">
			    阅读
			  </div>
			  <div class="weui-navbar__item">
			    <router-link to="/move">影视</router-link>
			  </div>
			 
			</div>
			<div class="zt">
			<mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
			<div class="weui-panel weui-panel_access" >
			
			  <div class="weui-panel__bd">
			    <div class="weui-media-box weui-media-box_text" v-for="itm in onedata" @click="fn(itm.item_id)">
			      <div class="weui-media-box__desc">
			        <img class="weui-media-box__thumb" v-lazy="itm.img_url" width="100%">
			      </div>
			      <div class="weui-media-box__desc">
			        <h4 class="weui-media-box__title">{{itm.title}}</h4>
			        <p class="weui-media-box__desc">{{itm.forward}}</p>
			      </div>
			      <ul class="weui-media-box__info">
			      	<li class="weui-media-box__info__meta">{{itm.author.user_name}}</li>
			      	<li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{itm.post_date}}</li>
			      </ul>
			    </div>
			  </div>
			
			</div>
			</mt-loadmore>
			</div>
		</div>
		
	</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'

export default {
  name: 'shouye',
  data () {
    return {
      onedata:'',
      content_list:'',
      allLoaded: false,
    
    }
  },
  methods:{
  	shujua(){
  		axios({
		  method:'get',
		  url: 'http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
		})
		.then(response => {
			this.onedata=response.data.data;
			console.log(this.onedata);
			this.$refs.loadmore.onTopLoaded();
		})

  	},
  	fn(item_id){
  		this.$router.push({path:'/xianxi',query:{item_id:item_id}});
  	},
  	loadTop(){	
		  this.shujua();
       }
  },
  created(){
  	this.shujua()
  }
}
</script>
<style scoped>


.weui-navbar{
	position: fixed;
}
.weui-media-box__title{
	margin-top: 5px;
}
.zt{
	margin-top: 10%
}

</style>