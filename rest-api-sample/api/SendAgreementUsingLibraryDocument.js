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
    module.exports = factory(require('../utils/LibraryDocumentUtils'), require('../utils/AgreementUtils'), require('../utils/Constants'), require('../utils/Errors'), require('../utils/ApiUtils'));
  
}(function(LibraryDocumentUtils, AgreementUtils, Constants, Errors, ApiUtils) {
  'use strict';

  /**
   * This sample client demonstrates how to send a new agreement.
   *
   * <p>
   * Following workflow has been implemented here :
   * <li> Get the id of the first library document of the user</li>
   * <li> Get agreement info and create an agreement using the library document.</li>
   * <li> Send the agreement.</li>
   * <li> Display agreement details.</li>
   * <b>IMPORTANT</b>: Before running this sample, check that you have modified the 'config.json' file with the appropriate values.
   * </p>
   */
  (function SendAgreementUsingLibraryDocument() {

    /**
     * Entry point for this sample client program.
     */
    ApiUtils.configureProperty(SendAgreementUsingLibraryDocument.name);

    //Get the id of the first library document of the user.
    LibraryDocumentUtils.getFirstLibraryDocumentId()
                        .then(function(libraryDocumentId) {

                          if(!libraryDocumentId) {
                            ApiUtils.logError(Errors.NO_LIBRARY_DOCUMENTS);
                          } 
                          else {
                            //List containing email ids of recipients
                            var recipientSetEmailList = [];
                            recipientSetEmailList.push(Constants.USER_EMAIL);

                            //Create agreement using the library document.
                            return AgreementUtils.createAgreement(recipientSetEmailList,
                                                                  libraryDocumentId,
                                                                  AgreementUtils.DocumentIdentifierType.LIBRARY_DOCUMENT_ID,
                                                                  Constants.AGREEMENT_NAME);

                          }
                        })
                        .then(function(agreementCreationResponse) {

                          //Get agreement info using the agreement id.
                          return AgreementUtils.getAgreementInfo(agreementCreationResponse.getAgreementId());

                        })
                        .then(function(agreementInfo) {

                          //Display agreement details
                          ApiUtils.info("Agreement ID = " + agreementInfo.getAgreementId());
                          ApiUtils.info("Agreement Name = " + agreementInfo.getName());
                          ApiUtils.info("Agreement Status = " + agreementInfo.getStatus());
                        })
                        .catch(function(apiError) {
                          ApiUtils.logError(Errors.SEND_AGREEMENT_USING_LIBRARY_DOCUMENT, 
                                            apiError);
                        })
      })();

}));