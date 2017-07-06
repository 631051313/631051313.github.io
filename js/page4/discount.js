
(function(window){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getinlanddiscount',
        type:'get',
        success:function(data){
            console.log(data);
            var htmlStr = template("list",data);
            $(".tp-add").html(htmlStr);
        }
    })
    $("#pal_rt").on("click",function(){
        history.back();
    })
})(window)