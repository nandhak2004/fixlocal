 import electrician from '../assets/electrician.jpg'
import painting from '../assets/painting.jpg'
import Plumber from '../assets/plumber.jpg'
 const bookings = [

    {
      id: "FXL-9901",
      providerId: 1,
      provider: "Arun Kumar",
      service: "Plumbing",
      date: "25 Oct 2023",
      time: "10:30 AM",
      status: "Confirmed",
       cancelReason: "",
      photo: electrician
    },
    {
      id: "FXL-9852",
      providerId: 1,
      provider: "Sathish Raj",
      service: "Electrician",
      date: "28 Oct 2023",
      time: "04:00 PM",
      status: "Pending",
       cancelReason: "",
      photo: painting
    },
     {
      id: "FXL-9853",
      providerId: 1,
      provider: "Raj",
      service: "Electrician",
      date: "28 Oct 2023",
      time: "04:00 PM",
      status: "complete",
       cancelReason: "",
      photo: Plumber
    }

  ];
  export default bookings