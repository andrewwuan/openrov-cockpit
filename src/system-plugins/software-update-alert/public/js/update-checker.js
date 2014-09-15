(function (window, $, undefined) {
  'use strict';

  function SoftwareUpdateChecker(config) {
    var self = this;

    self.getBranches = function(callback) {
      $.get(config.dashboardUrl + "/plugin/software/branches", callback );
    };

    self.checkForUpdates = function(callback){
      self.getBranches(function(branches) {
        $.post(config.dashboardUrl + "/plugin/software/updates", { branches: branches }, function(updates) {
          callback(updates);
        });
      });

      return { updates: false }
    };

    return self;
  }
  window.SoftwareUpdateChecker = SoftwareUpdateChecker;

}(window, jQuery));
