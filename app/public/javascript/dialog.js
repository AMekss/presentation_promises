var showDialog = function(dialogContent) {
  var deffered = $.Deferred();

  $(dialogContent).dialog({
    resizable: false,
    width: 500,
    modal: true,
    buttons: {
      "Fetch data": function() {
        deffered.resolve('/something_special');
        $(this).dialog("close");
      },
      Cancel: function() {
        deffered.reject();
        $(this ).dialog( "close" );
      }
    }
  });

  return deffered.promise();
};

var indicator = function(dataFetcher){
  $("#indicator").show();
  dataFetcher.always(function() {
    $("#indicator").hide();
  });
};

var renderData = function(data){
  $("#dialog_result").html(data);
};

$(function(){

  $("#dialog_opener").click(function(){
    renderData("");
    showDialog("#dialog_content").done(function(url) {
      var jqxhr = $.get(url).done(renderData);
      indicator(jqxhr);

    }).fail(function(){
      renderData("nothing special - dialog canceled");
    });

  });

});