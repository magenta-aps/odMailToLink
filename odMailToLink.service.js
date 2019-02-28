//
// Copyright (c) 2017-2018, Magenta ApS
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

'use strict'

angular.module('odMailToLink')
  .factory('odMailToLinkService', ['$state', '$window', odMailToLinkService])

function odMailToLinkService ($state, $window) {
  return {
    executeAction: executeAction
  }

  function executeAction (nodeId, controller) {
    var url = $state.href('document', {doc: nodeId}, {absolute: true})
    $window.open('mailto:?body=' + url)
  }
}
