(function(window){
    $(function(){
        $.ajax({
            url:"http://139.199.192.48:9090/api/getmoneyctrl",
            type:"get",
            success:function(data){
                console.log(data);
                var html = template("shengqiangTemplate",data);
                $("#tuijianUl").html(html);
                var pageAllNum = Math.ceil(data.totalCount/data.pagesize);
                for(var i=1;i<=pageAllNum;i++){
                    var opt = document.createElement('option');
                    opt.value = i;
                    opt.innerHTML = i+"/"+pageAllNum;
                    $("#pageBox").append(opt);
                }
            }
        })
    })
    var pageNum = 1;
    $("#pageLeftBtn").click(function(){
        if(pageNum==1){
            return
        }
        pageNum--;
        $("#tuijianUl").html("");


        var opts = $("#pageBox").children();
        for(var i = 0;i<opts.length;i++){
            if(opts[i].value == pageNum){
                opts[i].selected=true;
                break;
            }
        }

        $.ajax({
            url:"http://139.199.192.48:9090/api/getmoneyctrl",
            type:"get",
            data:{
                pageid:pageNum
            },
            success:function(data){
                var html = template("shengqiangTemplate",data);
                $("#tuijianUl").html(html);
            }
        })
    });
    $("#pageRightBtn").click(function(){
        pageNum++;
        $("#tuijianUl").html("");

        var opts = $("#pageBox").children();
        for(var i = 0;i<opts.length;i++){
            if(opts[i].value == pageNum){
                opts[i].selected=true;
                break;
            }
        }


        $.ajax({
            url:"http://139.199.192.48:9090/api/getmoneyctrl",
            type:"get",
            data:{
                pageid:pageNum
            },
            success:function(data){
                var html = template("shengqiangTemplate",data);
                $("#tuijianUl").html(html);
            }
        })
    });
    $("#pageBox").on("change",function(){
        $("#tuijianUl").html("");
        pageNum = this.value;
        $.ajax({
            url:"http://139.199.192.48:9090/api/getmoneyctrl",
            type:"get",
            data:{
                pageid:pageNum
            },
            success:function(data){
                var html = template("shengqiangTemplate",data);
                $("#tuijianUl").html(html);
            }
        })
    })
    $(".backBtn").click(function(){
        history.back();
    });
})(window)