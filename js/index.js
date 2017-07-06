(function(window){
    $(function(){
        $.ajax({
            url:"http://139.199.192.48:9090/api/getindexmenu",
            type:"get",
            success:function(data){
                console.log(data);
                var html = template("menuTemplate",data);
                $("#menuUl").html(html);
            }
        })

        $("#menuUl").on("click","#gengduo",function(){
            var lis = $("#menuUl").children();
            for(var i=8;i<lis.length;i++){
                if($(lis[i]).hasClass("checkShow")){
                     $(lis[i]).removeClass("checkShow");
                }else{
                    $(lis[i]).addClass("checkShow");
                }
            }
        });

        $.ajax({
            url:"http://139.199.192.48:9090/api/getmoneyctrl",
            type:"get",
            success:function(data){
                console.log(data);
                var html = template("tuijianTemplate",data);
                $("#tuijianUl").html(html);
            }
        })
    })
})(window)