// server/controllers/dashboardController.js
import {User} from "../models/User.js";
import { Courses } from "../models/Courses.js"; // Correct import for named export
import Testimonial from "../models/Testimonial.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCourses = await Courses.countDocuments(); // Use the named export
    const totalTestimonials = await Testimonial.countDocuments();

    res.status(200).json({
      users: totalUsers,
      courses: totalCourses,
      testimonials: totalTestimonials,
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    res.status(500).json({ message: "Failed to fetch dashboard data" });
  }
};
