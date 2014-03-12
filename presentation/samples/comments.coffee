# app/models/comments.js
App "models.comments",
  fetch: (postId, callback)->
    # fetch comments for post from server

  addComment: (postId, commentAttributes, callback)->
    # add comment for given post by sending it attributes to server


# app/views/comments.js
App "views.comments",
  render: (parentEl, comments)->
    # iterate over comments and call renederComment for each comment model

  renderComment: (comment)->
    # render comment and return rendered HTML


# app/controllers/comments.js
App("controllers.comments",
  get: (params)->
    App.models.comments.fetch params['postId'], (commets)->
      parentEl = document.getElementById("comments-container-#{params['postId']}")
      App.views.render parentEl, comments

  post: (params)->
    # add new comment
