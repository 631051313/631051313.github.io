(function(window){
    $(function(){
        var id = parseInt(location.search.split("=")[1]);
        var allPage;
        console.log(id);
        $.ajax({
            url:"http://139.199.192.48:9090/api/getcategorybyid",
            type:"get",
            data:{
                categoryid:id
            },
            success:function(data){
                $(".bijiaMBXname").html(data.result[0].category);
            }
        })
        $.ajax({
            url:"http://139.199.192.48:9090/api/getproductlist",
            type:"get",
            data:{
                categoryid:id
            },
            success:function(data){
                console.log(data);
                var html  = template("bijiaListTemplate",data);
                $("#bijialistUl").html(html);
                var pageAllNum = Math.ceil(data.totalCount/data.pagesize);
                allPage = pageAllNum;
                for(var i=1;i<=pageAllNum;i++){
                    var opt = document.createElement('option');
                    opt.value = i;
                    opt.innerHTML = i+"/"+pageAllNum;
                    $("#pageBox").append(opt);
                }
            }
        })

        var pageNum = 1;
        $("#pageLeftBtn").click(function(){
            if(pageNum==1){
                return
            }
            pageNum--;
            $("#bijialistUl").html("");


            var opts = $("#pageBox").children();
            for(var i = 0;i<opts.length;i++){
                if(opts[i].value == pageNum){
                    opts[i].selected=true;
                    break;
                }
            }

            $.ajax({
                url:"http://139.199.192.48:9090/api/getproductlist",
                type:"get",
                data:{
                    categoryid:id,
                    pageid:pageNum
                },
                success:function(data){
                    var html = template("bijiaListTemplate",data);
                    $("#bijialistUl").html(html);
                }
            })
        });
        $("#pageRightBtn").click(function(){
            if(pageNum==allPage){
                return;
            }
            pageNum++;
            $("#bijialistUl").html("");

            var opts = $("#pageBox").children();
            for(var i = 0;i<opts.length;i++){
                if(opts[i].value == pageNum){
                    opts[i].selected=true;
                    break;
                }
            }


            $.ajax({
                url:"http://139.199.192.48:9090/api/getproductlist",
                type:"get",
                data:{
                    categoryid:id,
                    pageid:pageNum
                },
                success:function(data){
                    var html = template("bijiaListTemplate",data);
                    $("#bijialistUl").html(html);
                }
            })
        });
        $("#pageBox").on("change",function(){
            $("#bijialistUl").html("");
            pageNum = this.value;
            console.log(pageNum);
            $.ajax({
                url:"http://139.199.192.48:9090/api/getproductlist",
                type:"get",
                data:{
                    categoryid:id,
                    pageid:pageNum
                },
                success:function(data){
                    var html = template("bijiaListTemplate",data);
                    $("#bijialistUl").html(html);
                }
            })
        })
        $(".backBtn").click(function(){
            history.back();
        });
    })
})(window)