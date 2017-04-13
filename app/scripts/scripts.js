$(function () {
	function getAllReddits() {
		$.getJSON('./data.json', function(data) {
			console.log(data); // this will show the info it in firebug console

			var output;

			$.each(data.links, function(i, item) {
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

	getAllReddits();
});