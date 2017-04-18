/* ========================= */
/* Funções do document.ready */
/* ========================= */

/*global $, jQuery, window, alert*/
/*jslint white: true*/
/*jshint ignore: start*/
$(function () {
  'use strict';
  //Responsive navigation function
  function responsiveNavigation() {
    var winSize = $(window).width();

    if (winSize < 768) {
      console.log(winSize);

      $(document).bind('click', function (e) {
        if ($(e.target).closest('.navbar').length === 0) {
          var opened = $('.collapsible').hasClass('collapse in');

          if (opened === true) {
              $('.collapsible').collapse('hide');
          }

          $('.search-box').hide();
          $('.search-box .form-control').val('');
          $('.overlay').hide();

          e.preventDefault();
        }
      });

      $('.collapsed').click(function () {
        $('.collapsible').collapse('hide');
      });

      $('.menu-toggle').on('click', function () {
        $(this).parents('.menu').find('.dropdown').addClass('open');
        $(this).parents('.menu').find('.dropdown-toggle').removeAttr('aria-expanded');
        $(this).parents('.menu').find('.dropdown-toggle').removeAttr('aria-haspopup');
        $(this).parents('.menu').find('.dropdown-toggle').removeAttr('data-toggle');
      });

      $('.new-post-toggle').on('click', function () {
        $(this).parents('.menu').find('.add-post-dropdown').addClass('open');
        $(this).parents('.menu').find('.add-post-toggle').removeAttr('aria-expanded');
        $(this).parents('.menu').find('.add-post-toggle').removeAttr('aria-haspopup');
        $(this).parents('.menu').find('.add-post-toggle').removeAttr('data-toggle');
      });

      $('.search-toggle').click(function () {
        var overlay = '<div class="overlay"></div>';

        $(this).parents('.menu').find('.search-box').toggle();
        $(this).parents('.menu').find('.search-box input').focus();

        $('body').append(overlay);
      });

      $('.search-box .form-control').on('blur', function () {
        $('.search-box').hide();
        $('.overlay').hide();
        $(this).val('');
      });

      $('.form-search').submit(function (e) {
        $('.search-box').hide();
        $('.overlay').hide();
        $(this).val('');

        e.preventDefault();
      });
    }
  }
  //Get all JSON data function
  function getAllReddits() {
    $.getJSON('./data.json', function (data) {
      //Show the JSON data in the console
      //console.log(data);

      var output;
      
      $.each(data.links, function (ignore, item) {
        console.log(item);

        var category = item.category,
          comments = item.comments,
          createdAt = item.created_at,
          upvotes = item.upvotes,
          author = item.meta.author,
          title = item.meta.title,
          url = item.meta.url,
          isOwner = item.isOwner;

        output = '<li>' + 
        ' <div class="upvotes-ctrl"><a href="javascript:void(0);" class="upvotes-btn fa fa-chevron-up text-center"></a><strong class="upvotes-text text-center">'+ upvotes +'</strong></div>' +
        ' <div class="reddits-content">' +
        '   <small class="category-small">'+ category +'</small><a href="#" class="subject-link">'+ url +'</a>' +
        '   <h3 class="subject-title">'+ title +'</h3>' +
        '   <strong class="subject-category subject-text-note"><span>'+ category +'</span></strong>' +
        '   <a href="#" class="subject-text-note"><span class="subject-text-ico fa fa-user"></span>'+ author +'</a>' +
        '   <span class="subject-text-date subject-text-note">'+ createdAt +'<i></i></span>' +
        '   <a href="#" class="subject-text-note"><span class="subject-text-ico fa fa-comment"></span>'+ comments +' <span class="subject-text-comment">comments</span></a>' +
        '   <small class="subject-text-note upvotes-small">'+ upvotes +'<a href="javascript:void(0);" class="glyphicon glyphicon-arrow-up"></a></small>' +
        '   <a href="javascript:void(0);" class="subject-text-note text-owner-edit">'+ isOwner +'</a>' +
        ' </div>' +
        '</li>';

        $('.reddits').append(output);
      });
    });
  }
  //Search for posts function
  function searchReddits () {
    $('#query').on('keyup', function () {
      var searchField = $('#query').val(),
        regex = new RegExp(searchField, 'i'),
        output,
        count = 1;

      $.getJSON('./data.json', function (data) {
        $.each(data.links, function (key, val) {
          if ((val.comments.toString().search(regex) !== -1) || (val.created_at.toString().search(regex) !== -1) || (val.upvotes.toString().search(regex) !== -1)) {
            output = '<li id='+key+'>' + 
            ' <div class="upvotes-ctrl"><a href="javascript:void(0);" class="upvotes-btn fa fa-chevron-up text-center"></a><strong class="upvotes-text text-center">'+ val.upvotes +'</strong></div>' +
            ' <div class="reddits-content">' +
            '   <small class="category-small">'+ val.category +'</small><a href="#" class="subject-link">'+ val.meta.url +'</a>' +
            '   <h3 class="subject-title">'+ val.meta.title +'</h3>' +
            '   <strong class="subject-category subject-text-note"><span>'+ val.category +'</span></strong>' +
            '   <a href="javascript:void(0);" class="subject-text-note"><span class="subject-text-ico fa fa-user"></span>'+ val.meta.author +'</a>' +
            '   <span class="subject-text-date subject-text-note">'+ val.created_at +'<i></i></span>' +
            '   <a href="javascript:void(0);" class="subject-text-note"><span class="subject-text-ico fa fa-comment"></span>'+ val.comments +' <span class="subject-text-comment">comments</span></a>' +
            '   <small class="subject-text-note upvotes-small">'+ val.upvotes +'<a href="javascript:void(0);" class="glyphicon glyphicon-arrow-up"></a></small>' +
            '   <span class="subject-text-note text-owner-edit">'+ val.isOwner +'</span>' +
            ' </div>' +
            '</li>';
            
            if(count%2 === 0){
              output = '<li><p class="subject-text-note ">No results found...</p></li>';
            }
            
            count += 1;
          }
        });
        
        $('.reddits').html('');
        $('.reddits').append(output);
      });  
    });
  }
  //Calling the main functions
  responsiveNavigation();
  searchReddits ();
  getAllReddits();
}); //end document.ready
/*jshint ignore:end*/