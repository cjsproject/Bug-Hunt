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