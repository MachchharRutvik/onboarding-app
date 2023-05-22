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
        fromDate: Yup.date().max(new Date(),"Please Enter valid date").typeError("From date is required"),
        toDate: Yup.date().max(new Date(),"Please Enter valid date").typeError("To date is required"),
        reasonForJobChange: Yup.string().required("Reason for job change is required"),
        checkBox: Yup.string().required("Checkbox is required"),
      })
    )
  }) 