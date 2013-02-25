function Main() {
  this.templates = {};
  this.views = {
    'templates': 'templates.html'
  };
  this.body = $('body');

}

Main.prototype.loadTemplates = function () {
  var self = this;
  $.when(
    self.getTemplateAjax()
  )
  .done(function (jXHR) {
    var template;
    if (typeof jHXR == 'object') {
      template = jXHR.responseText;
    }
    else {
      template = jXHR;
    }

    $(template).find('script').each(function (i, obj) {
      self.templates[obj.attr('id')] = obj.attr('id');
    });

    self.body.append(templates);
  });
}


Main.prototype.getTemplateAjax = function(template){
  var self = this;
	return $.ajax({
  		cache    : true,
      url      : './js/views/'+self.views[template],
      type     : 'get',
      dataType : 'text'
  });
};