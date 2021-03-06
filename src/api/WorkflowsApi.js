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
    define(['model/ApiClient', 'model/workflows/UserWorkflows'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../model/ApiClient'), require('../model/workflows/UserWorkflows'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.WorkflowsApi = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.UserWorkflows);
  }
}(this, function(ApiClient, UserWorkflows) {
  'use strict';

  /**
   * Workflows service.
   * @module api/WorkflowsApi
   * @version 6.0.0
   */

  /**
   * Constructs a new WorkflowsApi. 
   * @alias module:api/WorkflowsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieves workflows for a user.
     * @param {String} authorization An &lt;a href&#x3D;\&quot;#\&quot; onclick&#x3D;\&quot;this.href&#x3D;oauthDoc()\&quot; oncontextmenu&#x3D;\&quot;this.href&#x3D;oauthDoc()\&quot; target&#x3D;\&quot;oauthDoc\&quot;&gt;OAuth Access Token&lt;/a&gt; with scopes:&lt;ul&gt;&lt;li style&#x3D;&#39;list-style-type: square&#39;&gt;&lt;a href&#x3D;\&quot;#\&quot; onclick&#x3D;\&quot;this.href&#x3D;oauthDoc(&#39;workflow_read&#39;)\&quot; oncontextmenu&#x3D;\&quot;this.href&#x3D;oauthDoc(&#39;workflow_read&#39;)\&quot; target&#x3D;\&quot;oauthDoc\&quot;&gt;workflow_read&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;in the format &lt;b&gt;&#39;Bearer {accessToken}&#39;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiUser The userId or email of API caller using the account or group token in the format &lt;b&gt;userid:{userId} OR email:{email}.&lt;/b&gt; If it is not specified, then the caller is inferred from the token.
     * @param {Boolean} opts.includeDraftWorkflows Include draft workflows
     * @param {Boolean} opts.includeInactiveWorkflows Include inactive workflows
     * @param {String} opts.groupId The group identifier for which the workflows will be fetched
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/workflows/UserWorkflows} and HTTP response
     */
    this.getWorkflowsWithHttpInfo = function(authorization, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getWorkflows");
      }


      var pathParams = {
      };
      var queryParams = {
        'includeDraftWorkflows': opts['includeDraftWorkflows'],
        'includeInactiveWorkflows': opts['includeInactiveWorkflows'],
        'groupId': opts['groupId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization,
        'x-api-user': opts['xApiUser']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserWorkflows;

      return this.apiClient.callApi(
        '/workflows', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves workflows for a user.
     * @param {String} authorization An &lt;a href&#x3D;\&quot;#\&quot; onclick&#x3D;\&quot;this.href&#x3D;oauthDoc()\&quot; oncontextmenu&#x3D;\&quot;this.href&#x3D;oauthDoc()\&quot; target&#x3D;\&quot;oauthDoc\&quot;&gt;OAuth Access Token&lt;/a&gt; with scopes:&lt;ul&gt;&lt;li style&#x3D;&#39;list-style-type: square&#39;&gt;&lt;a href&#x3D;\&quot;#\&quot; onclick&#x3D;\&quot;this.href&#x3D;oauthDoc(&#39;workflow_read&#39;)\&quot; oncontextmenu&#x3D;\&quot;this.href&#x3D;oauthDoc(&#39;workflow_read&#39;)\&quot; target&#x3D;\&quot;oauthDoc\&quot;&gt;workflow_read&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;in the format &lt;b&gt;&#39;Bearer {accessToken}&#39;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiUser The userId or email of API caller using the account or group token in the format &lt;b&gt;userid:{userId} OR email:{email}.&lt;/b&gt; If it is not specified, then the caller is inferred from the token.
     * @param {Boolean} opts.includeDraftWorkflows Include draft workflows
     * @param {Boolean} opts.includeInactiveWorkflows Include inactive workflows
     * @param {String} opts.groupId The group identifier for which the workflows will be fetched
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/workflows/UserWorkflows}
     */
    this.getWorkflows = function(authorization, opts) {
      return this.getWorkflowsWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
