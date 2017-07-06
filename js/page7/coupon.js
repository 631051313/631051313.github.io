/**
 * Created by Administrator on 2017/7/4.
 */
$(function () {
    $.ajax({
        url:'http://139.199.192.48:9090/api/getcoupon',
        type:'get',
        success: function (data) {
            var htmlStr=template('coupon',data);
            $('#coupon_body').html(htmlStr);
        }
    });
    //$("#coupon_body").on('click','.couponId', function () {
    //    var id=$(this).parent().attr('data-id');
    //    $.ajax({
    //        url:'http://139.199.192.48:9090/api/getcouponproduct',
    //        type:'get',
    //        data:{couponId:id},
    //        success: function (data) {
    //            console.log(123);
    //            var htmlStr=template('coupon_info',data);
    //            $('#coupon_info_body').html(htmlStr);
    //        }
    //    })
    //})
});