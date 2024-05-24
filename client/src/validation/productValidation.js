import * as Yup from "yup"

const productSchema = Yup.object({
    img: Yup.string().required("URL is required"),
    title: Yup.string().min(3,"Your title in less than 3 words").required(),
    bio: Yup.string().min(7,"Bio in less than 7 words").required(),
    price: Yup.string().required(),
  
  });
  export default productSchema