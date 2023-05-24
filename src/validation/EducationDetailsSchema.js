import * as Yup from "yup";
export const educationDetailsValidation = Yup.object().shape({
    educationDetails:Yup.array().of(
        Yup.object().shape({
            educationType: Yup.string().required("Education type is required"),
            instituteName: Yup.string().required("Institute name is required"),
            course: Yup.string().required("Course is required"),
            cgpa: Yup.number().required("CGPA/Percentage is required").typeError("Please enter a valid number"),
            passingYear: Yup.string().required("Passing year is required"),
        })
    ),
    totalExperience: Yup.number().required("Total experience is required").typeError("Please enter a valid number").max(50, "Total experience cannot exceed 50"),
    experienceDetails:Yup.array().of(
      Yup.object().shape({
        company: Yup.string().required("Company is required"),
        designation: Yup.string().required("Designation is required"),
        technology: Yup.string().required("Technology is required"),
        fromDate: Yup.date().required("From date is required").max(new Date(),"From Date should be less than current date").typeError("Please enter a valid date").max(Yup.ref("toDate"), "From date should not be greater than to date"),
        toDate: Yup.date().required("To date is required").max(new Date(),"To date should be less than current date").typeError("Please enter a valid date").min(Yup.ref("fromDate"), "To date should not be less than start date"),
        reasonForJobChange: Yup.string().required("Reason for job change is required"),
        
      })
    )
  }) 