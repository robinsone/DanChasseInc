$(document).ready(function () {
    $.getJSON("http://api.flickr.com/services/feeds/photoset.gne?set=72157639564394773&nsid=104386403@N02&lang=en-us&format=json&jsoncallback=?", function (data) {
        var listItems = '';
        $('div.Desc').append(data.description);
        
        $.each(data.items, function (i, item) {
            var value = item.media.m;
            var valueBig = value.replace("m.jpg", "b.jpg");
            var valueSmall = value.replace("m.jpg", "s.jpg");
            listItems += '<img src="'+value+'" alt=""/>';
        });
        console.log(listItems);
        $('#photos').append(listItems);
      
       
    });
    
    
});
