'use strict';

/* @ngInject */
function toastrConfig(toastr) {
  toastr.options.target = '.labking';
  toastr.options.timeOut = 4000;
  toastr.options.positionClass = 'toast-bottom-right';
}

var config = {
  appErrorPrefix: '[labKing Error] ',
  appTitle: 'labKing',
  subjectNoun: 'ParticipantId',
  demographicDataset: 'Database_Enrollment'
};

/* @ngInject */
function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
  if ($logProvider.debugEnabled) {
    $logProvider.debugEnabled(true);
  }
  exceptionHandlerProvider.configure(config.appErrorPrefix);
  routerHelperProvider.configure({docTitle: config.appTitle + ': '});
}

module.exports = {
  config: config,
  configure: configure,
  toastrConfig: toastrConfig
};
