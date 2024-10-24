import axios from "axios";
import API from "./API";

export const getTour = async function (tourId) {
  try {
    const tourData = await API.get(`api/v1/tour/${tourId}`);
    // const tourData = await axios.get(
    //   `http://localhost:4000/api/v1/tour/${tourId}`
    // );

    return tourData.data?.data;
  } catch (error) {
    console.log(error);
  }
};
