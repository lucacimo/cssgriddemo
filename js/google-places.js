
    $.googlePlaces = function(element, options) {
        console.log("hello again");
        var defaults = {
              placeId: 'ChIJJzBUajbg9DkRl0n8FabbM0A' // placeId provided by google api documentation
            , render: ['reviews']
            , min_rating: 0
            , max_rows: 0
            , rotateTime: false
        };

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {
          plugin.settings = $.extend({}, defaults, options);
          $element.html("<div id='map-plug'></div>"); // create a plug for google to load data into
          initialize_place(function(place){
            plugin.place_data = place;
            if(plugin.settings.render.indexOf('reviews') > -1){
              renderReviews(plugin.place_data.reviews);
              if(!!plugin.settings.rotateTime) {
                  initRotation();
              }
            }
          });
        }

        var initialize_place = function(c){
          var map = new google.maps.Map(document.getElementById('map-plug'));

          var request = {
            placeId: plugin.settings.placeId
          };

          var service = new google.maps.places.PlacesService(map);

          service.getDetails(request, function(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              c(place);
            }
          });
        }

        var sort_by_date = function(ray) {
          ray.sort(function(a, b){
            var keyA = new Date(a.time),
            keyB = new Date(b.time);
            // Compare the 2 dates
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
          });
          return ray;
        }

        var filter_minimum_rating = function(reviews){
          for (var i = reviews.length -1; i >= 0; i--) {
            if(reviews[i].rating < plugin.settings.min_rating){
              reviews.splice(i,1);
            }
          }
          return reviews;
        }

        var renderReviews = function(reviews){
          reviews = sort_by_date(reviews);
          reviews = filter_minimum_rating(reviews);
          var html = "";
          var row_count = (plugin.settings.max_rows > 0)? plugin.settings.max_rows - 1 : reviews.length - 1;
          // make sure the row_count is not greater than available records
          row_count = (row_count > reviews.length-1)? reviews.length -1 : row_count;
          for (var i = row_count; i >= 0; i--) {
            var stars = renderStars(reviews[i].rating);
            var date = convertTime(reviews[i].time);
            html = html+"<div class='review-item'><div class='review-meta'><img class='reviewer-image' src='"+reviews[i].profile_photo_url+"' <span class='review-author'>"+reviews[i].author_name+"</span><span class='review-sep'>, </span><span class='review-date'>"+date+"</span></div>"+stars+"<p class='paragraph'>"+reviews[i].text+"</p></div>"
            
          };
          $element.append(html);
          
          if(window.innerWidth <= 860) {
            addShowMore();
          }
        }
      
        var initRotation = function() {
            var $reviewEls = $element.children('.review-item');
            var currentIdx = $reviewEls.length > 0 ? 0 : false;
            $reviewEls.hide();
            if(currentIdx !== false) {
                $($reviewEls[currentIdx]).show();
                setInterval(function(){ 
                    if(++currentIdx >= $reviewEls.length) {
                        currentIdx = 0;
                    }
                    $reviewEls.hide();
                    $($reviewEls[currentIdx]).fadeIn('slow');
                }, plugin.settings.rotateTime);
            }
        }

        var renderStars = function(rating){
          var stars = "<div class='review-stars'><ul>";
                            
          // fill in gold stars
          for (var i = 0; i < rating; i++) {
            stars = stars+"<li><i class='star'></i></li>";
          };

          // fill in empty stars
          if(rating < 5){
            for (var i = 0; i < (5 - rating); i++) {
              stars = stars+"<li><i class='star inactive'></i></li>";
            };
          }
          stars = stars+"</ul></div>";
          return stars;
        }

        var convertTime = function(UNIX_timestamp){
          var a = new Date(UNIX_timestamp * 1000);
          var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          var time = months[a.getMonth()] + ' ' + a.getDate() + ', ' + a.getFullYear();
          return time;
        }

        var addShowMore = function () {
          $('.paragraph').each(function(event){ /* select all divs with the item class */
      
            var max_length = 300; /* set the max content length before a read more link will be added */
            
            if($(this).html().length > max_length){ /* check for content length */
                
                var short_content 	= $(this).html().substr(0,max_length); /* split the content in two parts */
                var long_content	= $(this).html().substr(max_length);
                
                $(this).html(short_content+
                             '<a href="#" class="read_more"><br/>Read More</a>'+
                             '<span class="more_text" style="display:none;">'+long_content+'</span>'); /* Alter the html to allow the read more functionality */
                             
                $(this).find('a.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */
        
                    event.preventDefault(); /* prevent the a from changing the url */
                    $(this).hide(); /* hide the read more button */
                    $(this).parents('.paragraph').find('.more_text').show(); /* show the .more_text span */  
                });  
              }
            });
        }
        plugin.init();
    }

    $.fn.googlePlaces = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('googlePlaces')) {
                var plugin = new $.googlePlaces(this, options);
                $(this).data('googlePlaces', plugin);
            }
        });
    }

    
