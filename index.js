/**
 * Created by Andrey on 8/30/2017.
 */
$('document').ready(function() {
    mailtest = /^\w+([\.-]?\w+)*@(ya\.ru|yandex\.ru|yandex\.ua|yandex\.by|yandex\.kz|yandex\.com)$/;
    phonetest = /\+7\(\d\d\d\)\d\d\d\-\d\d\-\d\d/;

    $('#submitButton').click(function (event) {
        $('#email,#phone,#fio,#resultContainer').removeClass('error');
        $('#resultContainer').html('');
        event.preventDefault();
        if (!$('#fio').val()||!$('#email').val()||!$('#phone').val()) {
            $('#resultContainer').html('<p>Progress: Fill all fields</p>');
        } else {
            //validation
            if($('#fio').val().trim().split(/\s+/).length === 3){
                if(mailtest.test($('#email').val())) {
                    digit=$('#phone').val();
                    totalDigit=parseInt(digit[1])+parseInt(digit[3])+parseInt(digit[4])+parseInt(digit[5])+parseInt(digit[7])+parseInt(digit[8])+parseInt(digit[9])+parseInt(digit[11])+parseInt(digit[12])+parseInt(digit[14])+parseInt(digit[15]);
                    if(phonetest.test($('#phone').val())&&totalDigit<31) {
                        $('#submitButton').attr('disabled',true);
                        $('#resultContainer').addClass('success').html('<p>Success</p>');
                    } else {
                        $('#phone').addClass('error');
                        $('#resultContainer').addClass('error').html('<p>Reason: Wrong Phone Number</p>');
                    }
                } else {
                    $('#email').addClass('error');
                    $('#resultContainer').addClass('error').html('<p>Reason: Wrong Email</p>');
                }
            } else {
                $('#fio').addClass('error');
                $('#resultContainer').addClass('error').html('<p>Reason: Wrong Name</p>');
            }
        }

    });

});
