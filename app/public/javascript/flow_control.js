var renderLetter = function(letter) {
  $("#raw").append(letter + "; ");
};

var renderWord = function() {
  $(arguments).each(function(){
    $("#output").append(this[0]);
  });
  $("#output").append(" ");
};

var fetchLetter = function(letter) {
  return $.get('/letter/'+letter).done(renderLetter);
};

var fetchHello = function() {
  return $.when(fetchLetter('H'), fetchLetter('e'), fetchLetter('l'), fetchLetter('l'), fetchLetter('o'));
};

var fetchWorld = function() {
  return $.when(fetchLetter('w'), fetchLetter('o'), fetchLetter('r'), fetchLetter('l'), fetchLetter('d'), fetchLetter('!'));
};

$(function() {
  $("#fetcher").click(function() {
    $("#raw").html("");
    $("#output").html("");

    $.when(fetchHello()).done(renderWord, function(){
      $.when(fetchWorld()).done(renderWord);
    });

  });
});