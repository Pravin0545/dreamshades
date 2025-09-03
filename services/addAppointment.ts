import axios from "axios";

export async function addAppointment(formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}) {
  try {
    const response = await axios.post("/api/appointment-booking", formData);
    return response.data; // returns created document
  } catch (error: any) {
    throw error.response?.data || { error: "Something went wrong" };
  }
}
