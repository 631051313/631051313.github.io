/**
 * Created by Administrator on 2017/7/5.
 */
$(function () {
    var id = location.search.slice(1);
    //console.log(id);
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getbrand',
        type: 'get',
        data:{brandtitleid:id},
        success: function (data) {
            //console.log(data);
            var htmlStr = template('brand_title_list', data);
            $('.brand_title').html(htmlStr);
        }
    });

    $.ajax({
        url: 'http://139.199.192.48:9090/api/getbrandproductlist',
        type: 'get',
        data:{brandtitleid:id},
        success: function (data) {
            //console.log(123);
            //console.log(data);
            var htmlStr = template('brand_title_list2', data);
            $('.brand_title2').html(htmlStr);
        }
    });
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getproductcom',
        type: 'get',
        data:{productid :id},
        success: function (data) {
            console.log(data);
            var htmlStr = template('brand_title_list3', data);
            console.log(htmlStr);
            $('.brand_title3').html(htmlStr);
        }
    });
});