(function(){
    var str = location.search;
    var a = str.split("=");
    var id = parseInt(a[1]);
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getdiscountproduct',
        type: 'get',
        dataType: 'json',
        data: {
            productid: id
        },
        success:function(data){
            var title = data.result[0].productName;
            var htmlStr = template("template",data);
            $(".pal-content").html(htmlStr);
            $("#ls-crumbs-add").html(title);
        }
    });

    $("#pal_return").on("click",function(){
        history.back();
    })



})()















