
var myLists = "";

$(document).ready(function() {

var catDiv = $('.categories');

 $.ajax({
 url:'js/movie-list.json',
 type:'get',
 dataType:'json',
 success:function(data){
 	var myLists = data;
	 for(var key in myLists){
	            var attrName = key;
	            var attrValue = myLists[key];
	            //console.log(attrValue.EventId);
		 		var movieCaretBox = $('<div />', {
	                 "class" : 'col-md-6 movieCaretBox'  
	              });

	             var movieCaret = $('<div />', {
	                 "class" : 'movieCaret box-std shadow2x clearfix roundBox colorsPalette clr-3 marT80'  
	              });  

	              var colLeft = $('<div />', {
	                 "class" : 'col-md-4 nopadding'  
	              });

	              var colRight = $('<div />', {
	                 "class" : 'col-md-8 paddr0'  
	              });

	              var movieTitle = $('<div />', {
	                 "class" : 'movieTitle'
	              });

	               var moviePoster = $('<div />', {
	                 "class" : 'moviePoster md marT-52'  
	              });

	               var movieLanguage = $('<div />', {
	                 "class" : 'movieLanguage colorsPalette-text text-clr-6'  
	              });

	               var movieCast ='<div class="movieCast"><span class="castCircle"><img src="images/actor-1.png"></span><span class="castCircle"><img src="images/actor-2.png"></span><span class="castCircle"><img src="images/actor-3.png"></span><span class="castCircle"><img src="images/actor-4.png"></span><span class="castCircle"><img src="images/actor-5.png"></span></div><div class="frndsGoing colorsPalette-text text-clr-6">Clark, kim &amp; <span class="nof">7</span> other are going!</div>';

	               var movieImg = attrValue.EventId+".jpg";
	               var moveiePosterImgEle = '<img src="images/'+movieImg+'" class="img-responsive">' + movieCast;

	               var movieTitleCtn = attrValue.EventName;
	               var movieTitleTxt = '<h4>' +movieTitleCtn+ '</h4>';

	               var movieLang = attrValue.Language;
	               var movieLangStr = movieLang.join(' | ');

	               var startRating = $('<div />', {
	                 "class" : 'startRating colorsPalette-text text-clr-6'  
	              });
	               
	               var startHTML = '<span class="rating"></span> <span> Critics Rating</span>'

	               var movieTime = $('<div />', {
	                 "class" : 'movieTime colorsPalette-text text-clr-6'  
	              });
	               var movieTimeCtn = attrValue.RunTime;
	               var movieTimeHTML = '<span>' +movieTimeCtn+ '</span>'

	               var movieCat = $('<div />', {
	                 "class" : 'movieCat marT25'  
	              });

	               var Genre = attrValue.Genre;

	               for(var gkey in Genre){
	               		var movieGenre = $('<span />', {
		                 "class" : 'badge-light-2',
		                 text: Genre[gkey] 
	              		});
               			movieCat.append(movieGenre);
               		}
	               
               		var movieVotes = $('<div />', {
	                 "class" : 'movieVotes'  
	              });

               		var likesCtn = attrValue.likes;
               		var userVotesCtn = attrValue.UserVotes;

               		var likes = $('<div />', {
	                 "class" : 'likes'
	              });
               		likes.html('<img src="images/heart.png"> <span>'+likesCtn+'</span>');

               		var userVotes = $('<div />', {
	                 "class" : 'votes colorsPalette-text text-clr-6'  
	              });
               		userVotes.html('<div class="votes colorsPalette-text text-clr-6"> '+userVotesCtn +' Votes</div>');
               	
	               var bookNowBtn = $('<div />', {
	                 "class" : 'bookNowBtn'
	              });

	             bookNowBtn.html('<a href="" class="btn btn-red shadow roundBtn">Book Now</a>');

	             var fitterKey = movieLang;

	             for(var i = 0; i<fitterKey.length; i++){
    				fitterKey[i] = '.' + fitterKey[i];
					}

				var catLangStr = fitterKey.join(' ');	
				console.log(catLangStr)	

	             $('.movieCaretBox').attr("data-filter", catLangStr);
            
	             movieTime.html(movieTimeHTML) // movieTimeHTML html 
	             startRating.html(startHTML)  // Starrating html 
	             movieLanguage.html(movieLangStr); // movieLanguage text
	             moviePoster.html(moveiePosterImgEle); //  moviePoster image

	             colLeft.append(moviePoster); // Append movie poster div

 				 movieTitle.html(movieTitleCtn); //  movie title html
 				 colRight.append(movieTitle); // Append movie title div
	             movieCaret.append(colLeft); // Append colLeft div col-md-4
	     
	             movieCaret.append(colRight); // Append colRight div col-md-8
	             colRight.append(movieLanguage); // Append movieLanguage div
	             colRight.append(startRating); // Append startRating div
	             colRight.append(movieTime); // Append movieTime div
	             colRight.append(movieCat); // Append movieCat div

	             colRight.append(movieVotes); // Append movieVotes div
	             movieVotes.append(likes); // Append like div
	             movieVotes.append(userVotes); // Append voter div
	             movieCaret.append(bookNowBtn); // Append bookNowBtn div

	             movieCaretBox.append(movieCaret); // Append movieCaret div
              	 catDiv.append(movieCaretBox); // Append movieCaretBox div
		}
  	}
 });

//$('#movieCategory').mixItUp();
$('.slider-nav').slick({
	slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});



});
