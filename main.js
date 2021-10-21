$(document).ready(() => {
    $.validator.addMethod('regex', function (value) { 
        return /[a-zA-Z]{2,40}$/.test(value); 
    }, 'Please enter a valid name');

    $("#form").validate({
      errorClass: "error fail-alert",
      validClass: "valid success-alert",
      rules: {
        name: {
          required: true,
          regex:true
        },
        nrp: {
          required: true,
          minlength:10,
          maxlength:10
        },
        jurusan: {
          required: true,
        },
        hp: {
          required: true,
          minlength:10
        },
      },
      errorElement : 'div',
      errorLabelContainer: '.errorTxt',
      submitHandler: () => {
        Swal.fire({
          icon: "success",
          title: "Submit berhasil",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.replace("//www.google.com");
        });
      },
    });
  });