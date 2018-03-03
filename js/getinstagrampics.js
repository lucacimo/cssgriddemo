ACCESS_TOKEN = "3015018768.1677ed0.fef522ac3c8f4691afd9062eaddde756";
var data;

$.ajax({
    type: "GET",
    url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=3015018768.1677ed0.fef522ac3c8f4691afd9062eaddde756",
    data: data,
    dataType: 'json',
    cache: false,
    success: function(data){
       display_latest_media(data);
    }
  });

  function display_latest_media(data) {
   
    function isVideo(value) {
        return value.type == "video";
    }

    function isPic(value) {
        return value.type == "image";
    }
    pictures = data.data.filter(isPic).slice(0, 3);
    video = data.data.filter(isVideo);



    var insta_images = document.getElementsByClassName("insta_image");
    var insta_video = document.getElementsByClassName("insta_video");

    insta_video[0].firstElementChild.href = video[0].link//videos.standard_resolution.url
    insta_video[0].children[0].firstElementChild.src = video[0].images.standard_resolution.url;

    for (var i in insta_images) {
        insta_images[i].children[0].firstElementChild.src=pictures[i].images.standard_resolution.url;
        insta_images[i].firstElementChild.href = pictures[i].link//images.standard_resolution.url;
    }
}
