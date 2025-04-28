// server/controllers/testimonialController.js
import Testimonial from "../models/Testimonial.js";

// Get All Testimonials
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ message: "Failed to fetch testimonials" });
  }
};

// Create a New Testimonial
export const createTestimonial = async (req, res) => {
  try {
    const { name, message, image, position } = req.body;

    const newTestimonial = new Testimonial({ name, message, image, position });
    await newTestimonial.save();

    res.status(201).json(newTestimonial);
  } catch (error) {
    console.error("Error creating testimonial:", error);
    res
      .status(500)
      .json({ message: error.message || "Failed to create testimonial" });
  }
};

// Update a Testimonial
export const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Testimonial.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated)
      return res.status(404).json({ message: "Testimonial not found" });

    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating testimonial:", error);
    res.status(500).json({ message: "Failed to update testimonial" });
  }
};

// Delete a Testimonial
export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Testimonial.findByIdAndDelete(id);

    if (!deleted)
      return res.status(404).json({ message: "Testimonial not found" });

    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    res.status(500).json({ message: "Failed to delete testimonial" });
  }
};
