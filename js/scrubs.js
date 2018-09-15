let dropArea = document.getElementById('drop-area')

  dropArea.addEventListener('dragenter', handlerFunction, false)
  dropArea.addEventListener('dragleave', handlerFunction, false)
  dropArea.addEventListener('dragover', handlerFunction, false)
  dropArea.addEventListener('drop', handlerFunction, false)     


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#uploadedshit')
                .attr('src', e.target.result)
                .width(e.width)
                .height(e.height);
        };
        reader.readAsDataURL(input.files[0]);
    }
}