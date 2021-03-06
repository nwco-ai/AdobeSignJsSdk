/**
*  Copyright 2019 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*
**/


/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/widgets/FileInfo', 'model/widgets/SecurityOption', 'model/widgets/VaultingInfo', 'model/widgets/WidgetAdditionalParticipationSetInfo', 'model/widgets/WidgetCcInfo', 'model/widgets/WidgetInActiveInfo', 'model/widgets/WidgetParticipantSetInfo', 'model/widgets/WidgetRedirectionInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileInfo'), require('./SecurityOption'), require('./VaultingInfo'), require('./WidgetAdditionalParticipationSetInfo'), require('./WidgetCcInfo'), require('./WidgetInActiveInfo'), require('./WidgetParticipantSetInfo'), require('./WidgetRedirectionInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.WidgetCreationInfoV6 = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.FileInfo, root.SwaggerJsClient.SecurityOption, root.SwaggerJsClient.VaultingInfo, root.SwaggerJsClient.WidgetAdditionalParticipationSetInfo, root.SwaggerJsClient.WidgetCcInfo, root.SwaggerJsClient.WidgetInActiveInfo, root.SwaggerJsClient.WidgetParticipantSetInfo, root.SwaggerJsClient.WidgetRedirectionInfo);
  }
}(this, function(ApiClient, FileInfo, SecurityOption, VaultingInfo, WidgetAdditionalParticipationSetInfo, WidgetCcInfo, WidgetInActiveInfo, WidgetParticipantSetInfo, WidgetRedirectionInfo) {
  'use strict';




  /**
   * The WidgetCreationInfoV6 model module.
   * @module model/widgets/WidgetCreationInfoV6
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>WidgetCreationInfoV6</code>.
   * @alias module:model/widgets/WidgetCreationInfoV6
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>WidgetCreationInfoV6</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/WidgetCreationInfoV6} obj Optional instance to populate.
   * @return {module:model/widgets/WidgetCreationInfoV6} The populated <code>WidgetCreationInfoV6</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additionalParticipantSetsInfo')) {
        obj['additionalParticipantSetsInfo'] = ApiClient.convertToType(data['additionalParticipantSetsInfo'], [WidgetAdditionalParticipationSetInfo]);
      }
      if (data.hasOwnProperty('authFailureInfo')) {
        obj['authFailureInfo'] = WidgetRedirectionInfo.constructFromObject(data['authFailureInfo']);
      }
      if (data.hasOwnProperty('ccs')) {
        obj['ccs'] = ApiClient.convertToType(data['ccs'], [WidgetCcInfo]);
      }
      if (data.hasOwnProperty('completionInfo')) {
        obj['completionInfo'] = WidgetRedirectionInfo.constructFromObject(data['completionInfo']);
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
      }
      if (data.hasOwnProperty('creatorEmail')) {
        obj['creatorEmail'] = ApiClient.convertToType(data['creatorEmail'], 'String');
      }
      if (data.hasOwnProperty('fileInfos')) {
        obj['fileInfos'] = ApiClient.convertToType(data['fileInfos'], [FileInfo]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('securityOption')) {
        obj['securityOption'] = SecurityOption.constructFromObject(data['securityOption']);
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('vaultingInfo')) {
        obj['vaultingInfo'] = VaultingInfo.constructFromObject(data['vaultingInfo']);
      }
      if (data.hasOwnProperty('widgetInActiveInfo')) {
        obj['widgetInActiveInfo'] = WidgetInActiveInfo.constructFromObject(data['widgetInActiveInfo']);
      }
      if (data.hasOwnProperty('widgetParticipantSetInfo')) {
        obj['widgetParticipantSetInfo'] = WidgetParticipantSetInfo.constructFromObject(data['widgetParticipantSetInfo']);
      }
    }
    return obj;
  }

  /**
   * List of all the participants in the widget except widget signer
   * @member {Array.<module:model/widgets/WidgetAdditionalParticipationSetInfo>} additionalParticipantSetsInfo
   */
  exports.prototype['additionalParticipantSetsInfo'] = undefined;
  /**
   * URL and associated properties for the error page the widget signer will be taken after failing to authenticate
   * @member {module:model/widgets/WidgetRedirectionInfo} authFailureInfo
   */
  exports.prototype['authFailureInfo'] = undefined;
  /**
   * A list of one or more email addresses that you want to copy on this transaction. The email addresses will each receive an email when the final agreement created through widget is signed. The email addresses will also receive a copy of the document, attached as a PDF file
   * @member {Array.<module:model/widgets/WidgetCcInfo>} ccs
   */
  exports.prototype['ccs'] = undefined;
  /**
   * URL and associated properties for the success page the widget signer will be taken to after performing desired action on the widget
   * @member {module:model/widgets/WidgetRedirectionInfo} completionInfo
   */
  exports.prototype['completionInfo'] = undefined;
  /**
   * Date when widget was created. If provided in POST, it will simply be ignored. Format would be yyyy-MM-dd'T'HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time
   * @member {Date} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * Email of widget creator. Only returned in GET response. Cannot be provided in POST/PUT request. If provided in POST, it will simply be ignored
   * @member {String} creatorEmail
   */
  exports.prototype['creatorEmail'] = undefined;
  /**
   * A list of one or more files (or references to files) that will be used to create the widget. If more than one file is provided, they will be combined before the widget is created. Library documents are not permitted. Note: Only one of the four parameters in every FileInfo object must be specified
   * @member {Array.<module:model/widgets/FileInfo>} fileInfos
   */
  exports.prototype['fileInfos'] = undefined;
  /**
   * A resource identifier that can be used to uniquely identify the widget in other apis. If provided in POST, it will simply be ignored
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The locale associated with this widget - specifies the language for the signing page and emails, for example en_US or fr_FR. If none specified, defaults to the language configured for the widget creator
   * @member {String} locale
   */
  exports.prototype['locale'] = undefined;
  /**
   * The name of the widget that will be used to identify it, in emails, website and other places
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Secondary security parameters for the widget
   * @member {module:model/widgets/SecurityOption} securityOption
   */
  exports.prototype['securityOption'] = undefined;
  /**
   * The state in which the widget should land. For example in order to create a widget in DRAFT state, field should be DRAFT. The state field will never get returned in GET /widgets/{ID} and will be ignored if provided in PUT /widgets/{ID} call. The eventual status of the widget can be obtained from GET /widgets/ID
   * @member {module:model/widgets/WidgetCreationInfoV6.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Status of the Widget. If provided in POST, it will simply be ignored
   * @member {module:model/widgets/WidgetCreationInfoV6.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Vaulting properties that allows Adobe Sign to securely store documents with a vault provider
   * @member {module:model/widgets/VaultingInfo} vaultingInfo
   */
  exports.prototype['vaultingInfo'] = undefined;
  /**
   * The custom message which will be displayed to the user or the URL to which user will be redirected when the widget is accessed in a disabled state. This can only be specified in PUT request
   * @member {module:model/widgets/WidgetInActiveInfo} widgetInActiveInfo
   */
  exports.prototype['widgetInActiveInfo'] = undefined;
  /**
   * Represents widget participant for whom email should not be provided
   * @member {module:model/widgets/WidgetParticipantSetInfo} widgetParticipantSetInfo
   */
  exports.prototype['widgetParticipantSetInfo'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "DRAFT"
     * @const
     */
    "DRAFT": "DRAFT",
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "AUTHORING"
     * @const
     */
    "AUTHORING": "AUTHORING"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "DRAFT"
     * @const
     */
    "DRAFT": "DRAFT",
    /**
     * value: "AUTHORING"
     * @const
     */
    "AUTHORING": "AUTHORING",
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "DOCUMENTS_NOT_YET_PROCESSED"
     * @const
     */
    "DOCUMENTS_NOT_YET_PROCESSED": "DOCUMENTS_NOT_YET_PROCESSED",
    /**
     * value: "DISABLED"
     * @const
     */
    "DISABLED": "DISABLED",
    /**
     * value: "DISCARDED"
     * @const
     */
    "DISCARDED": "DISCARDED"  };


  return exports;
}));


