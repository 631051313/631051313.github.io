/**
 * Created by Administrator on 2017/7/5.
 */
$(function () {
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getbrandtitle',
        type: 'get',
        success: function (data) {
            //console.log(123);
            //console.log(data);
            var htmlStr = template('brand_list_body', data);
            $('.list_body').html(htmlStr);
        }
    });
});