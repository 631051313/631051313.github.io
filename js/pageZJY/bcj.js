//location.reload()
$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getbaicaijiatitle",
	success:function(suc){
//		console.log(suc)
		$("#dsad").html(template("nav",suc))
		 $("#dsad").find("a").on("click",function(){
 	 $("#dsad").find("a").removeClass("currentli");
 	 $(this).addClass("currentli")
   	 $.ajax({
   	 	type:"get",
   	 	url:"http://139.199.192.48:9090/api/getbaicaijiaproduct",
   	 	data:{titleid:$(this).data("id")},
   	 	success:function(suc){
   	 		$("#listall").html(template("list",suc));
   	 	}
   	 });
 })
	}
});

$.ajax({
	type:"get",
	url:"http://139.199.192.48:9090/api/getbaicaijiaproduct",
	data:{titleid:1},
	success:function(suc){
//		console.log(suc)
		$("#listall").html(template("list",suc));
	}
});
		
   var wrapper=document.querySelector("#wrapper");
	var wrapperwidth=wrapper.offsetWidth;
	 var dsad= wrapper.querySelector("#dsad");
   	var dsadwidth=dsad.offsetWidth;
   	
	 /*静止状态下最小Y坐标*/
    var minX=wrapperwidth-dsadwidth;
     /*弹簧状态下最小Y坐标*/
    var bounceMinX=minX-100;
    var bounceMaxX=100;
	var maxX=0;    
	
	var startX= 0,moveX= 0,distanceX=0;
	var currentX=0;
	 dsad.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    })
	 
	  dsad.addEventListener("touchmove",function(e){
        moveX=e.targetTouches[0].clientX;
        distanceX=moveX-startX;
        /*判断当前滑动的距离是否超出弹簧区间，如果超出，则不响应*/
        if(currentX+distanceX < bounceMinX || currentX+distanceX > bounceMaxX){
            return;
        }
        dsad.style.transition="none";
        dsad.style.left=currentX+distanceX+"px";
    })
	 
		
	dsad.addEventListener("touchend",function(e){
        if(currentX+distanceX < minX){ //在最小区间范围内
            /*添加过渡*/
            dsad.style.transition="left .5s";
            /*回弹操作*/
            dsad.style.left=minX+"px";
            /*重置currentY*/
            currentX=minX;
        }
        else if(currentX+distanceX > maxX){
            dsad.style.transition="left .5s";
            /*回弹操作*/
            dsad.style.left=maxX+"px";
            /*重置currentY*/
            currentX=maxX;
        }
        /*正常的区间范围内的滑动*/
        else{
            /*应该累加之前滑动过的所有距离*/
            currentX+=distanceX;
        }
    });	
		

$("#back").on("click",function(){
	history.back()
})

