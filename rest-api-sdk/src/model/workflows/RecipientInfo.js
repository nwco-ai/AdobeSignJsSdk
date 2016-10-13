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
    module.exports = factory(require('../../utils/ApiClient'));

}(function(ApiClient) {
  'use strict';


  /**
   * @module model/workflows/RecipientInfo
   * @version 1.0.0
   */
  /**
   * Constructs a new <code>RecipientInfo</code>.
   * @alias module:model/workflows/RecipientInfo
   * @class
   */
  var RecipientInfo = function() {
    var _this = this;


    _this.email = undefined;

    _this.fax = undefined;

   /**
    * Email of the recipient. This is required if fax is not provided. Both fax and email can not be provided
    * @function getEmail
    * @return  Email of the recipient. This is required if fax is not provided. Both fax and email can not be provided { String }
    * @instance
    */
    _this.getEmail = function() {
      return _this.email;
    };

   /**
    * Email of the recipient. This is required if fax is not provided. Both fax and email can not be provided
    * @function setEmail
    * @param email { String } Email of the recipient. This is required if fax is not provided. Both fax and email can not be provided
    * @instance
    */
    _this.setEmail = function(email) {
      _this.email = email;
    };

   /**
    * Fax of the recipient. This is required if email is not provided. Both fax and email can not be provided
    * @function getFax
    * @return  Fax of the recipient. This is required if email is not provided. Both fax and email can not be provided { String }
    * @instance
    */
    _this.getFax = function() {
      return _this.fax;
    };

   /**
    * Fax of the recipient. This is required if email is not provided. Both fax and email can not be provided
    * @function setFax
    * @param fax { String } Fax of the recipient. This is required if email is not provided. Both fax and email can not be provided
    * @instance
    */
    _this.setFax = function(fax) {
      _this.fax = fax;
    };

  };

  /**
   * @private
   * Constructs a <code>RecipientInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/workflows/RecipientInfo} obj Optional instance to populate.
   * @return {module:model/workflows/RecipientInfo} The populated <code>RecipientInfo</code> instance.
   */
  RecipientInfo.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new RecipientInfo();

      if (data.hasOwnProperty('email')) {
        obj.setEmail(data.email);
      }
      if (data.hasOwnProperty('fax')) {
        obj.setFax(data.fax);
      }
    }
    return obj;
  };


  return RecipientInfo;
}));


