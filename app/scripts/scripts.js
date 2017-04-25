/* ========================= */
/* Funções do document.ready */
/* ========================= */

/*global $, jQuery, window, alert*/
$(function () {
    'use strict';
    //Responsive navigation function
    function responsiveNavigation() {
        var winSize = $(window).width();

        if (winSize < 768) {
            //Show the browser's windows in the console
            console.log(winSize);

            $(document).bind('click', function (e) {
                if ($(e.target).closest('.navbar').length === 0) {
                    var opened = $('.collapsible').hasClass('collapse in');

                    if (opened === true) {
                        $('.collapsible').collapse('hide');
                    }

                    $('.search-box').hide();
                    $('.search-box .form-control').val('');

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
                $(this).parents('.menu').find('.search-box').toggle();
                $(this).parents('.menu').find('.search-box input').focus();
            });

            $('.search-box .form-control').on('blur', function () {
                $('.search-box').hide();
                $(this).val('');
            });

            $('.form-search').submit(function (e) {
                $('.search-box').hide();
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

                output = '<li data-upvotes="' + upvotes + '" data-comments="' + comments + '" data-created-at="' + createdAt + '">' +
                        '   <div class="upvotes-ctrl"><a href="javascript:void(0);" class="upvotes-btn fa fa-chevron-up text-center"></a><strong class="upvotes-text text-center">' + upvotes + '</strong></div>' +
                        '   <div class="reddits-content">' +
                        '       <small class="category-small">' + category + '</small><a href="#" class="subject-link">' + url + '</a>' +
                        '       <h3 class="subject-title">' + title + '</h3>' +
                        '       <strong class="subject-category category-' + category + '-bg"><span>' + category + '</span></strong>' +
                        '       <a href="javascript:void(0);" class="subject-text-note"><span class="subject-text-ico fa fa-user"></span>' + author + '</a>' +
                        '       <span class="subject-text-date subject-text-note">' + createdAt + '<i></i></span>' +
                        '       <a href="javascript:void(0);" class="subject-text-note"><span class="subject-text-ico fa fa-comment"></span>' + comments + ' <span class="subject-text-comment">comments</span></a>' +
                        '       <small class="subject-text-note upvotes-small">' + upvotes + '<a href="javascript:void(0);" class="glyphicon glyphicon-arrow-up"></a></small>' +
                        '       <a href="javascript:void(0);" class="subject-text-note text-owner-edit">' + isOwner + '</a>' +
                        '   </div>' +
                        '</li>';

                $('.reddits').append(output);
            });
        });
    }

    //Search for posts function
    function searchReddits() {
        $('#query').on('keyup', function () {
            $.getJSON('./data.json', function (data) {
                var searchField = $('#query').val(),
                    regex = new RegExp(searchField, 'i'),
                    output = '',
                    count = 0;

                $.each(data.links, function (key, val) {
                    if ((val.comments.toString().search(regex) !== -1) || (val.created_at.toString().search(regex) !== -1) || (val.upvotes.toString().search(regex) !== -1) || (val.category.search(regex) !== -1) || (val.meta.title.search(regex) !== -1) || (val.meta.author.search(regex) !== -1)) {
                        output += '<li  data-upvotes="' + val.upvotes + '" data-comments="' + val.comments + '" data-created-at="' + val.createdAt + '" id="' + key + '">' +
                                '   <div class="upvotes-ctrl"><a href="javascript:void(0);" class="upvotes-btn fa fa-chevron-up text-center"></a><strong class="upvotes-text text-center">' + val.upvotes + '</strong></div>' +
                                '   <div class="reddits-content">' +
                                '       <small class="category-small">' + val.category + '</small><a href="#" class="subject-link">' + val.meta.url + '</a>' +
                                '       <h3 class="subject-title">' + val.meta.title + '</h3>' +
                                '       <strong class="subject-category category-' + val.category + '-bg"><span>' + val.category + '</span></strong>' +
                                '       <a href="javascript:void(0);" class="subject-text-note"><span class="subject-text-ico fa fa-user"></span>' + val.meta.author + '</a>' +
                                '       <span class="subject-text-date subject-text-note">' + val.created_at + '<i></i></span>' +
                                '       <a href="javascript:void(0);" class="subject-text-note"><span class="subject-text-ico fa fa-comment"></span>' + val.comments + ' <span class="subject-text-comment">comments</span></a>' +
                                '       <small class="subject-text-note upvotes-small">' + val.upvotes + '<a href="javascript:void(0);" class="glyphicon glyphicon-arrow-up"></a></small>' +
                                '       <a href="javascript:void(0);" class="subject-text-note text-owner-edit">' + val.isOwner + '</a>' +
                                '   </div>' +
                                '</li>';

                        count += 1;
                    }
                });

                if (count === 0) {
                    output = '<li>' +
                            '   <div class="panel-results-feedback">' +
                            '       <div class="feedback-content">' +
                            '           <h4>No results found...</h4>' +
                            '       </div>' +
                            '   </div>' +
                            '</li>';
                }

                $('.reddits').html('');
                $(output).hide().appendTo('.reddits').fadeIn(300);
            });
        });
    }

    //Sort by ascending order function
    function orderASCList(t) {
        function sortASC(a, b) {
            return ($(b).data(t)) > ($(a).data(t))
                ? 1
                : -1;
        }

        $('.reddits > li').sort(sortASC).appendTo('.reddits');
    }

    //Sort by descending order function
    function orderDESCList(t) {
        function sortDESC(a, b) {
            return ($(b).data(t)) < ($(a).data(t))
                ? 1
                : -1;
        }

        $(".reddits > li").sort(sortDESC).appendTo('.reddits');
    }

    //Sorting function
    function sortable(listType) {
        $('.list-pop').click(function () {
            if (listType === 'upvotes') {
                var el = $('.list-pop > i');

                $(el).toggleClass('fa-caret-down');
                $(el).toggleClass('fa-caret-up');

                if ($(el).hasClass('fa-caret-down')) {
                    orderASCList(listType);
                } else {
                    orderDESCList(listType);
                }
            }
        });

        $('.list-comments').click(function () {
            if (listType === 'comments') {
                var el = $('.list-comments > i');

                $(el).toggleClass('fa-caret-down');
                $(el).toggleClass('fa-caret-up');

                if ($(el).hasClass('fa-caret-down')) {
                    orderASCList(listType);
                } else {
                    orderDESCList(listType);
                }
            }
        });

        $('.list-date').click(function () {
            if (listType === 'created-at') {
                var elem = $('.list-date > i');

                $('.list-date > i').toggleClass('fa-caret-down');
                $('.list-date > i').toggleClass('fa-caret-up');

                if ($(elem).hasClass('fa-caret-down')) {
                    orderASCList(listType);
                } else {
                    orderDESCList(listType);
                }
            }
        });
    }

    //Calling the main functions
    responsiveNavigation();
    getAllReddits();
    searchReddits();
    sortable();
}); //end document.ready