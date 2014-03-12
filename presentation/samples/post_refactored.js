// app/views/posts.js
App("views.post", {
  render: function(parentEl, postPromise) {
    App.utils.indicator(postPromise);
    postPromise.done(function(post) {
      // render post into parent element
    });
  }
});

// app/models/post.js
App("models.post", {
  fetch: function(id) {
    $.get('posts/' + id);
  },

  save: function(postAttributes) {
    $.post('posts/' + postAttributes['id'], postAttributes);
  }
});

// app/controllers/post.js
App("controllers.post", {
  get: function(params) {
    var postPromise = App.models.post.fetch(params['id']
    App.views.post.render(document.getElementById('post-container'), postPromise);
  },

  post: function(params) {
    App.models.post.save(params['post']);
  }
});
