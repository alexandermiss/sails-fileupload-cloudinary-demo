
var FileUpload = {};


FileUpload = {

  uploadFile: function(form, cb){

    var form = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', function (progress){
      console.log('progress', progress);
    });

    xhr.onreadystatechange = function (){
      if( xhr.readyState == 4 ){
        if( xhr.status == 200 ){
          var json = JSON.parse(xhr.responseText);
          cb(json);
        }
      }
    };

    xhr.open('POST', '/file/upload');
    xhr.send( form );

  }

}
