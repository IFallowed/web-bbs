//function barter_btn(bb){
//	$(bb).parent().hide();
//	$(bb).parent().siblings().show();
//}
$(function () {
    $('#form-tab a:first').tab('show');
	$('#login_mail').blur(function() {
		if(""==($(this).val().trim())){
			$(this).siblings('.form_info').html("<font style='color:#DC143C'>请输入邮箱</font>");
		}
		else {
			if($(this).val().trim().match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
				$(this).siblings('.form_info').text("");
			}
			else{
				$(this).siblings('.form_info').html("<font style='color:#DC143C'>邮箱格式不正确</font>");
			}
		}
	});
	$('#login_password').blur(function() {
		if(""==($(this).val().trim())){
			$(this).siblings('.form_info').html("<font style='color:#DC143C'>请输入密码</font>");
		}
		else {
			$(this).siblings('.form_info').text("");
		}
	});
	$('#register_mail').blur(function() {
		if(""==($(this).val().trim())){
			$(this).siblings('.form_info').html("<font style='color:#DC143C'>请输入邮箱</font>");
		}
		else {
			if($(this).val().trim().match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
				$(this).siblings('.form_info').html("<font style='color:#7FFF00'>√</font>");
			}
			else{
				$(this).siblings('.form_info').html("<font style='color:#DC143C'>邮箱格式不正确</font>");
			}
		}
	});
	$('#register_password').blur(function() {
		if(""==($(this).val().trim())){
			$(this).siblings('.form_info').html("<font style='color:#DC143C'>请输入密码</font>");
		}
		else {
			if($(this).val().trim().match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/)){
				$(this).siblings('.form_info').html("<font style='color:#7FFF00'>√</font>");
			}
			else{
				$(this).siblings('.form_info').html("<font style='color:#DC143C'>密码格式不正确：6-16位字母数字组合</font>");
			}
		}
	});
});
