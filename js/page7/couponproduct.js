/**
 * Created by Administrator on 2017/7/4.
 */
$(function () {
    var id = location.search.slice(1);
    //console.log(id);
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getcouponproduct',
        type: 'get',
        data:{couponid:id},
        success: function (data) {
            console.log(data);
            var htmlStr = template('coupon_info', data);
            $('#coupon_info_body').html(htmlStr);
            var htmlStr2 = template('coupon_lbt', data);
            $('.carousel-inner').html(htmlStr2);
        }
    });
    $('.body').on('click', function () {
        $('.lbt').show();
    });
    $('.lbt').on('click', function () {
        $('.lbt').hide();
    });
    $('.carousel').carousel({
        interval:1000
    });
});