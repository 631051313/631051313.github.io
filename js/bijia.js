(function(window){
    $(function(){
        $.ajax({
            url:"http://139.199.192.48:9090/api/getcategorytitle",
            type:"get",
            success:function(data){
                console.log(data);
                var html = template("bijiaTitle",data);
                $(".bijiaBox").html(html);
            }
        })
        $(".bijiaBox").on("click",".titleP",function(){
            var id =$(this).parent().data("id");
            var ul = $(this).next("ul");
            ul.toggleClass('isShow');
            if(!ul.html()){
                $.ajax({
                    url:"http://139.199.192.48:9090/api/getcategory",
                    type:"get",
                    data:{
                        titleid:id
                    },
                    success:function(data){
                        var html = template("bijiaLi",data);
                        ul.html(html);
                    }
                })
            }
        })

    })
})(window)