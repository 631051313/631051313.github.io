$("#back").on("click",function(){
	history.back()
})
var id = parseInt(location.search.split("=")[1]);
$.ajax({
		type:"get",
		url:"http://139.199.192.48:9090/api/getmoneyctrlproduct",
		data:{productid:id},
		success:function(suc){
			$("#rong").html(template("ron",suc))
		}
	});

