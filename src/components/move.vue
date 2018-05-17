<template>
	<div class="top">
		<div>
			<mt-header fixed  title="电影">
				<div slot="left" @click="backa()">
			    <mt-button icon="back"></mt-button>
			  </div>
			  
			</mt-header>
			
		</div>
		<div class="weui-panel weui-panel_access">
		  
		  <div class="weui-panel__bd"  v-infinite-scroll="loadMore" infinite-scroll-distance="10">
		    <div class="weui-media-box weui-media-box_appmsg" v-for="itm in onedata" @click="fn(itm.item_id)">
		      <div class="weui-media-box__hd">
		        <img class="weui-media-box__thumb" v-lazy="itm.img_url" style="width:100%">
		      </div>
		      <div class="weui-media-box__bd">
		        <h4 class="weui-media-box__title">{{itm.subtitle}}</h4>
		        <p class="weui-media-box__desc">{{itm.title}}</p>
		      </div>
		    </div>
		    <mt-spinner type="fading-circle"></mt-spinner>
		   
		  </div>
		 
		</div>
		
	</div>
</template>
<script>
	import Vue from 'vue'
	import axios from 'axios'
	export default {
	  name: 'move',
	  data () {
	    return {
	      onedata:[],
	      idcs:0,
	      page:1,
	   
	     
	    }
	  },
	  methods:{
	  	shujua(){
	  		axios({
			  method:'get',
			  url: 'http://v3.wufazhuce.com:8000/api/channel/movie/more/'+this.idcs+'?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
			})
			.then(response => {
				this.onedata=this.onedata.concat(response.data.data);
				console.log(this.onedata)
			})
	  	},
	  	fn(item_id){
	  		this.$router.push({path:'/movexx',query:{item_id:item_id}});
	  	},
	  	backa(){
	  		window.history.go(-1)
	  	},

	  	loadMore(){
	  		if(this.onedata.length>5){
	  			var i=this.page*10-1;
			  var id=this.onedata[i].id
			  this.idcs=id;
			  this.shujua();
			  this.page=this.page+1;
	  		}
		  
		}
	  },
	  created(){
	  	this.shujua()
	  }
	}
</script>
<style scoped>
	.top{
		margin-top: 50px;
	}
	
</style>
