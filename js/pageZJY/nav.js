$.ajax({
		type:"get",
		url:"http://139.199.192.48:9090/api/getsitenav",
		success:function(suc){
			$("#con").html(template("quan",suc))
//			console.log(suc)
		}
	});
	
	$("#back").on("click",function(){
	history.back()
})
	
//alert(1)