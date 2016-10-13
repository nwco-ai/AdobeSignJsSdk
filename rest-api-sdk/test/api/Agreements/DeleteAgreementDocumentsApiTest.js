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
 */

(function (factory) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../utils/TestData'), require('../../utils/AgreementUtils'), require('../../../src/utils/validator/SdkErrorCodes'), require('../../utils/ApiUtils'), require('../../../src/utils/StringUtil'));
    
}(function (TestData, AgreementUtils, SdkErrorCodes, ApiUtils, StringUtil) {
    'use strict';

    /**
     * Mocha unit tests for Delete Agreement Documents Api.
     */
    describe('DeleteAgreementDocumentsApiTest', function () {

        var agreementsApi = null;
        var agreementId = null;
        this.timeout(TestData.TIME_OUT);

        before(function (done) {
            ApiUtils.configureProperty();
            agreementsApi = AgreementUtils.getAgreementsApi();
            AgreementUtils.getResourceId(ApiUtils.getAgreementName())
                          .then(function (agreementIdResponse) {
                              agreementId = agreementIdResponse;
                              done();

                          })
                          .catch(function (apiError) {
                              done(apiError);
                          });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments.
         * Case covered is successful execution of the api call.
         *
         * @throws ApiError
         */
        it('testDeleteDocuments', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getValidHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             done(apiError);
                         });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments. Negative scenarios covered:
         * NO_ACCESS_TOKEN_HEADER: null access token.
         *
         * @throws ApiError
         */
        it('testNullAccessToken', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getNullAccessTokenHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.NO_ACCESS_TOKEN_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments. Negative scenarios covered:
         * INVALID_ACCESS_TOKEN: empty access token.
         *
         * @throws ApiError
         */
        it('testEmptyAccessToken', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getEmptyAccessTokenHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_ACCESS_TOKEN) ? done() : done(apiError);
                         });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments. Negative scenarios covered:
         * INVALID_X_API_USER_HEADER: empty xApiUser.
         *
         * @throws ApiError
         */
        it('testInvalidXApiHeader', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          agreementId,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: null agreementId.
         *
         * @throws ApiError
         */
        it('testNullAgreementId', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          TestData.NULL_PARAM,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });

        /**
         * Test for deleting all the documents associated with an agreement through the deleteDocuments. Negative scenarios covered:
         * INVALID_AGREEMENT_ID: empty agreementId.
         *
         * @throws ApiError
         */
        it('testEmptyAgreementId', function (done) {
            var opts = {};
            agreementsApi.deleteDocuments(ApiUtils.getEmptyXApiUserHeaderParams(),
                                          TestData.EMPTY_PARAM,
                                          opts)
                         .then(function () {
                             done();
                         })
                         .catch(function (apiError) {
                             StringUtil.assertEqual(apiError,
                                                    SdkErrorCodes.INVALID_X_API_USER_HEADER) ? done() : done(apiError);
                         });

        });


    });

}));
