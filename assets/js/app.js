
$(function(){

  $('#sendPhoto').on('click', function (e){
    var form = document.getElementById('form');

    FileUpload.uploadFile(form, function finalizado (datos){
      var img = document.getElementById('image');
      img.src = datos.secure_url;

      $('#idCard').text(img.public_id);

    });

  });

});
