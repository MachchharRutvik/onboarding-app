import * as Yup from "yup";

export const UploadDocumentsSchema = Yup.object().shape({
    educationCertificates: Yup.array().of(Yup.object().shape({
      document: Yup.string().required("Document type is required"),
      documentName: Yup.string().required("Document name is required"),
    })),
    adharNumber: Yup.number().required("Adhaar number is required").typeError("Enter a valid Number"),
    adharFront: Yup.mixed().required("Adhaar front is required"),
    adharBack: Yup.mixed().required("Adhaar back is required"),
    panCardNumber: Yup.string().required("Pan card is required"),
    panCardDocument: Yup.mixed().required("Pan card document is required"),
    streetLine1: Yup.string().required("Street line 1 is required"),
    streetLine2: Yup.string().required("Street line 2 is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    postalCode: Yup.string().required("Postal code is required"),
    area: Yup.string().required("Area is required"),
    perStreetLine1: Yup.string().required("Permanent street line 1 is required"),
    perStreetLine2: Yup.string().required("Permanent street line 2 is required"),
    perCity: Yup.string().required("Permanent city is required"),
    perState: Yup.string().required("Permanent state is required"),
    perCountry: Yup.string().required("Permanent country is required"),
    perPostalCode: Yup.string().required("Permanent postal code is required"),
    perArea: Yup.string().required("Permanent area is required"),
    
    latestExperienceLetter: Yup.mixed().required("Latest experience letter is required"),
    latestRelievingLetter: Yup.mixed().required("Latest relieving letter is required"),
    salarySlips: Yup.mixed().required("Salary slips is required"),
    form16: Yup.mixed().required("Form 16 is required"),
  })