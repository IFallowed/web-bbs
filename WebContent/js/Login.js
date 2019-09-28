//function barter_btn(bb){
//	$(bb).parent().hide();
//	$(bb).parent().siblings().show();
//}
$(function () {
    $('#form-tab a:first').tab('show')
});
$('#login_mail').blur(function() {
	if($(this).val().trim().length < 1){
		$(this).find('.form_info').html("请填写邮箱！");
	}
});