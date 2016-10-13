/*
*  Copyright 2016 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*/

(function(factory) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../utils/ApiClient'), require('../../model/widgets/DisplayUserInfo'));

}(function(ApiClient, DisplayUserInfo) {
  'use strict';


  /**
   * @module model/widgets/DisplayUserSetInfo
   * @version 1.0.0
   */
  /**
   * Constructs a new <code>DisplayUserSetInfo</code>.
   * @alias module:model/widgets/DisplayUserSetInfo
   * @class
   */
  var DisplayUserSetInfo = function() {
    var _this = this;


    _this.displayUserSetMemberInfos = undefined;

   /**
    * Displays the info about user set
    * @function getDisplayUserSetMemberInfos
    * @return  Displays the info about user set { Array }
    * @instance
    */
    _this.getDisplayUserSetMemberInfos = function() {
      return _this.displayUserSetMemberInfos;
    };

   /**
    * Displays the info about user set
    * @function setDisplayUserSetMemberInfos
    * @param displayUserSetMemberInfos { Array } Displays the info about user set
    * @instance
    */
    _this.setDisplayUserSetMemberInfos = function(displayUserSetMemberInfos) {
      _this.displayUserSetMemberInfos = displayUserSetMemberInfos;
    };

  };

  /**
   * @private
   * Constructs a <code>DisplayUserSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/DisplayUserSetInfo} obj Optional instance to populate.
   * @return {module:model/widgets/DisplayUserSetInfo} The populated <code>DisplayUserSetInfo</code> instance.
   */
  DisplayUserSetInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new DisplayUserSetInfo();

      if (data.hasOwnProperty('displayUserSetMemberInfos')) {
        obj.setDisplayUserSetMemberInfos(ApiClient.convertToType(data.displayUserSetMemberInfos,[DisplayUserInfo]));
      }
    }
    return obj;
  };


  return DisplayUserSetInfo;
}));


