var vue=new Vue({
	el:'.container',
	data:{
		productList:[],
		totalMoney:0,
		deleFlag:false
	},	
	mounted:function(){
		this.$nextTick(function(){
			this.renderView();
		})
	},
	filters:{
		formatMoney:function(value){
			return "￥"+value.toFixed(2)+"元";
		}
	},
	methods:{
		renderView:function(){
			console.log('sdsd')
			var self=this;
			this.$http.get('http://rap.taobao.org/mockjsdata/14519/api/goodlist')
				.then(function(res){
					self.productList=res.body.result.productList;
				})
		}
	}
})
console.log('ssss')