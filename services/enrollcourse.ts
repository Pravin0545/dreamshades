import axios from "axios";

export async function enrollCourse(formData: {
  name: string;
  email: string;
  phone: string;
  course: string;
  experience: string;
  message: string;
}) {
  try {
    const response = await axios.post("/api/enroll-course", formData);
    return response.data; // returns created document
  } catch (error: any) {
    throw error.response?.data || { error: "Something went wrong" };
  }
}
