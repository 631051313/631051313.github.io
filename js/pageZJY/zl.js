$("#back").on("click",function(){
	history.back()
})

var  a=location.search.slice(1)
			 var arr= a.split("&")
			 var obj={}
			for ( var i=0;i<arr.length;i++ ) {
				var temp=arr[i].split("=")
				obj[temp[0]]=temp[1]
}
$.ajax({
		type:"get",
		url:"http://139.199.192.48:9090/api/getmoneyctrlproduct",
		data:{productid:obj.proid},
		success:function(suc){
			console.log(suc)
			$("#rong").html(template("ron",suc))
		}
	});

