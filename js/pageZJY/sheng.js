$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getmoneyctrl",
	success:function(suc){
//		console.log(suc)
		$("#con").html(template("list",suc))

		var pages=Math.ceil(suc.totalCount/suc.pagesize)
//			console.log(pages)
		var htmll=""
		for ( var i=1;i<=pages;i++) {
		htmll+='<option value='+(i)+' style="text-align: center; class="pa">'+i+'/'+pages+'</option>'
		}
//			console.log(htmll)
			document.getElementById("selct").innerHTML=(htmll)
		$("#selct").html(htmll)
		
//		console.log($("#selct"))
	}
});
		
//		window.onload=function(){
//			location.reload();
//		}


var pindex=1
$("#selct").on("change",function(){
			pindex=$(this).val()
$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getmoneyctrl",
	data:{pageid:$(this).val()},
	success:function(suc){
//		console.log(suc)
$("#con").html(template("list",suc))
	}
});
})

	$("#back").on("click",function(){
	history.back()
})
	
	
 $("#downpage").on("click",function(){
 		pindex++
 	$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getmoneyctrl",
	data:{pageid:pindex},
	success:function(suc){
$("#con").html(template("list",suc))
		var selct=document.getElementById("selct");
	var opt =selct.getElementsByTagName("option");
		for(var i=0;i<opt.length;i++){
			if(pindex==opt[i].value  ){
				opt[i].selected=true
			}
		}
	}
});
 })
 $("#uppage").on("click",function(){
 	
 	if(pindex!=1){
 		pindex--
 	}
 		
 	$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getmoneyctrl",
	data:{pageid:pindex},
	success:function(suc){
$("#con").html(template("list",suc))
	var selct=document.getElementById("selct");
	var opt =selct.getElementsByTagName("option");
		for(var i=0;i<opt.length;i++){
			if(pindex==opt[i].value  ){
				opt[i].selected=true
			}
		}
	}
});
 })
 
 $("#back").on("click",function(){
	history.back()
})

//$("#con").on("click",".mr",function(){
//	$.ajax({
//		type:"get",
//		url:"http://139.199.192.48:9090/api/getmoneyctrlproduct",
//		data:{productid:$(this).data("id")},
//		success:function(suc){
//			location.href="../public/zl.html?data="+suc.result[0]
////			console.log(suc.result[0])
//		}
//	});
//})



	  



//	var  myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true });
//
//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
//	capture: false,
//	passive: false
//} : false)
//
//function isPassive() {
//  var supportsPassiveOption = false;
//  try {
//      addEventListener("test", null, Object.defineProperty({}, 'passive', {
//          get: function () {
//              supportsPassiveOption = true;
//          }
//      }));
//  } catch(e) {}
//  return supportsPassiveOption;
//}
		