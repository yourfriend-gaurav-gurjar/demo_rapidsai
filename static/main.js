Dropzone.autoDiscover = false;

const myDropzone = new Dropzone("#my-dropzone", {
    url: "upload",
    maxFiles: 3,
    acceptedFiles: ".csv"
})

$.ajax({
    type
})