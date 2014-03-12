// app/models/post.js
App("models.post", {
  fetch: function(id, callback) {
    // fetch post from server
  },

  save: function(postAttributes, callback) {
    // send post attributes to server
  }
});

// app/views/posts.js
App("views.post", {
  render: function(parentEl, post) {
    // render post into parent element
  }
});

// app/controllers/post.js
App("controllers.post", {
  get: function(params) {
    App.models.post.fetch(params['id'], function(post){
      App.views.post.render(document.getElementById('post-container'), post);
    });
  },

  post: function(params) {
    App.models.post.save(params['post']);
  }
})

// app/models/post.js with Backbone
App("models", {
  Post: Backbone.Model.extend({
    initialize: function() {
      // initialize
    },
    author: function() {
      // return the author of the post
    }
  })
});

// and call it
post = new App.models.Post()
