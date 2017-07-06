$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getgsshop",
	success:function(suc){
		$("#dian").html(template("zxc",suc))
		
	}
});

$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getgsshoparea",
	success:function(suc){
		$("#di").html(template("a",suc))
	}
});

$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getgsproduct",
	data:{
		shopid:"0",
		areaid:"0"
	},
	success:function(suc){
		$("#zhao").html(template("pl",suc))
	}
});
	 var a=0;
	 var b=0;

$("#dian").on("change",function(){
	a=$(this).val()
	
	$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getgsproduct",
	data:{
		shopid:a||"0",
		areaid:b||"0"
	},
	success:function(suc){
//		console.log(suc)
		console.log(a,b)
		$("#zhao").html(template("pl",suc))
	}
});
})


$("#di").on("change",function(){
	b=$(this).val()
	
	$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getgsproduct",
	data:{
		shopid:a||0,
		areaid:b||0
	},
	success:function(suc){
		console.log(a,b)
//		console.log(suc)
		$("#zhao").html(template("pl",suc))
	}
});
})
$("#back").on("click",function(){
	history.back()
})