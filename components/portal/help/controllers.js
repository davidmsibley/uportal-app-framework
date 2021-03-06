/*
 * Licensed to Apereo under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Apereo licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License.  You may obtain a
 * copy of the License at the following location:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
'use strict';

define(['angular', 'require'], function(angular, require) {
  return angular.module('portal.help.controllers', [])
    .controller('SessionInfoController', [
      '$log', '$scope', 'portalAboutService', 'SERVICE_LOC',
      function($log, $scope, portalAboutService, SERVICE_LOC) {
        portalAboutService.getFrameDetails()
          .then(function(result) {
            $scope.frameInfo = result;
            return result;
          }).catch(function() {
          $log.warn('issue getting frame details');
        });

        $scope.appInfo = null;
        if (SERVICE_LOC.aboutURL) {
          portalAboutService.getDetails(SERVICE_LOC.aboutURL)
            .then(function(result) {
              $scope.appInfo = result;
              return result;
            }).catch(function() {
            $log.warn('issue getting app info');
          });
        }
      }]);
});
