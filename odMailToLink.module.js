//
// Copyright (c) 2017-2018, Magenta ApS
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

import daTranslation from './i18n/da-odMailToLink.json'
import enTranslation from './i18n/en-odMailToLink.json'

angular.module('odMailToLink', [])
  .config(['translatePluggableLoaderProvider', 'documentActionServiceProvider', config])

function config (translatePluggableLoaderProvider, documentActionServiceProvider) {
  documentActionServiceProvider.addAction('mail', 'OD_MAIL_TO_LINK.SEND_LINK_WITH_MAIL', 'odMailToLinkService')
  translatePluggableLoaderProvider.translations('da', daTranslation)
  translatePluggableLoaderProvider.translations('en', enTranslation)
}
