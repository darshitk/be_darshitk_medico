# Rest API document

# Doctor
#### Create
* POST - /api/doctors 
###### Example
```
{
 "npi": "140001",
 "entityTypeCode": "1000014",
 "customerId": "152477",
 "replacementNpi": "445565",
 "employerIdentificationNumber": "99878554",
 "sysState": "Open",
 "providerOrganizationName": "Orgname",
 "providerFirstName": "firstname",
 "providerLastName": "lastName",
 "whoUpdated": "Admin",
 "providerMiddleName": "Firstname",
 "providerCredentialText": "Lastname",
 "providerOtherOrganizationName": "Org Name",
 "providerFirstLineBusinessMailingAddress": "Street name,City",
 "providerSecondLineBusinessMailingAddress": "business@test.com",
 "providerBusinessMailingAddressCountryCode": "US",
 "providerBusinessMailingAddressTelephoneNumber": "",
 "providerBusinessMailingAddressFaxNumber": "",
 "providerEnumerationDate": "2017-05-05",
 "providerGenderCode": "M",
 "authorizedOfficialLastName": "Lastname",
 "authorizedOfficialFirstName": "FirstName",
 "authorizedOfficialMiddleName": "middleName",
 "authorizedOfficialTelephoneNumber": "00547785588",
 "healthcareProviderTaxonomyCode_1": "TXN",
 "providerLicenseNumber_1": "LICNO11233",
 "lastUpdate": "2017-05-05T00:00:00.000Z"
}
```

#### Read 
* GET - /api/doctors/?start_index={num}&end_index={num}
* GET (by id) - /api/doctors/:id

#### Update 
* PUT - /api/doctors/:id 
###### Example
```
{
 "npi": "140001",
 "entityTypeCode": "1000014",
 "customerId": "152477",
 "replacementNpi": "445565",
 "employerIdentificationNumber": "99878554",
 "sysState": "Open",
 "providerOrganizationName": "Orgname",
 "providerFirstName": "firstname",
 "providerLastName": "lastName",
 "whoUpdated": "Admin",
 "providerMiddleName": "Firstname",
 "providerCredentialText": "Lastname",
 "providerOtherOrganizationName": "Org Name",
 "providerFirstLineBusinessMailingAddress": "Street name,City",
 "providerSecondLineBusinessMailingAddress": "business@test.com",
 "providerBusinessMailingAddressCountryCode": "US",
 "providerBusinessMailingAddressTelephoneNumber": "",
 "providerBusinessMailingAddressFaxNumber": "",
 "providerEnumerationDate": "2017-05-05",
 "providerGenderCode": "M",
 "authorizedOfficialLastName": "Lastname",
 "authorizedOfficialFirstName": "FirstName",
 "authorizedOfficialMiddleName": "middleName",
 "authorizedOfficialTelephoneNumber": "00547785588",
 "healthcareProviderTaxonomyCode_1": "TXN",
 "providerLicenseNumber_1": "LICNO11233",
 "lastUpdate": "2017-05-05T00:00:00.000Z"
}

```
#### Delete 
* DELETE - /api/doctors/:id

# Patient
#### Create
* POST - /api/patients 
###### Example
```
{
 "tenantId": "Test0001",
 "userid": "1000014",
 "customerId": "152477",
 "portalId": "445565",
 "status": "Open",
 "sysState": "Open",
 "dateCreated": "2017-05-05T00:00:00.000Z",
 "dateUpdated": "2017-05-05T00:00:00.000Z",
 "whoCreated": "Admin",
 "whoUpdated": "Admin",
 "firstName": "First name",
 "lastName": "Last name",
 "phoneMobile": "05874556",
 "referral": [{"doctorName" : "doctor2","doctorID":"222"}],
 "originalData": "originalData",
 "email": "test@test.com"
}

```

#### Read 
* GET - /api/patients/
* GET (by id) - /api/patients/:id

#### Update 
* PUT - /api/patients/:id 
###### Example
```
{
 "tenantId": "Test0001",
 "userid": "1000014",
 "customerId": "152477",
 "portalId": "445565",
 "status": "Open",
 "sysState": "Open",
 "dateCreated": "2017-05-05T00:00:00.000Z",
 "dateUpdated": "2017-05-05T00:00:00.000Z",
 "whoCreated": "Admin",
 "whoUpdated": "Admin",
 "firstName": "First name",
 "lastName": "Last name",
 "phoneMobile": "05874556",
 "referral": [{"doctorName" : "doctor2","doctorID":"222"}],
 "originalData": "originalData",
 "email": "test@test.com"
}

```
#### Delete 
* DELETE - /api/patients/:id
