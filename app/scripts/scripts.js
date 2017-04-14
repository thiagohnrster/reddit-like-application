/* ========================= */
/* Funções do document.ready */
/* ========================= */

/*global $, jQuery, alert*/
/*jshint ignore: start*/
$(function () {
	'use strict';
	//Responsive navigation function
	function responsiveNavigation() {
		$(window).bind('load', function () {
		  if ($(this).width() < 768) {
			  $('body').bind('click', function (e) {
					if($(e.target).closest('.navbar').length == 0) {
						var opened = $('.collapsible').hasClass('collapse in');
						
						if (opened === true) {
							$('.collapsible').collapse('hide');
						}
						
						$('.search-box').hide();

						e.preventDefault();
					}
				});
				
				$('.collapsed').click(function (e) {
					$('.collapsible').collapse('hide');
				});

				$('.search-toggle').click(function (e) {
					$(this).parents('.menu').find('.search-box').toggle();
				});
			}
		});
	}
	//Get all JSON data function
	function getAllReddits() {
		$.getJSON('./data.json', function (data) {
			 // Show the JSON data in the console
			console.log(data);

			var output;

			$.each(data.links, function (i, item) {
				console.log(item);

				var	category = item.category,
					comments = item.comments,
					createdAt = item.created_at,
					upvotes = item.upvotes,
					author = item.meta.author,
					title = item.meta.title,
					url = item.meta.url;

				output = '<ul>' +
				'	<li>' + 
				'		<div><strong>'+ upvotes +'</strong></div>' +
				'		<a href="#">'+ url +'</a>' +
				'		<h3>'+ title +'</h3>' +
				'		<strong>'+ category +'</strong> <a href="#">'+ author +'</a> <span>'+ createdAt +'</span> <a href="#">'+ comments +' comments</a>' +
				'	</li>' +
				'</ul>';

				$('.reddits').append(output);
			});
		});
	}
	//Calling the main functions 
	responsiveNavigation();
	getAllReddits();
}); //end document.ready
/*jshint ignore:end*/