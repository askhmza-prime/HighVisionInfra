"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle2 } from "lucide-react";
import { PROJECTS_DATA } from "@/constants";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    preferredProject: PROJECTS_DATA[0]?.title || "",
    preferredDate: "",
    preferredTime: "10:00 AM",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to backend API / WhatsApp redirect here
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 border border-brand-border/60 shadow-xl max-w-xl mx-auto">
      {submitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Site Visit Requested!</h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Thank you, <span className="font-semibold text-brand-emerald">{formData.fullName}</span>. 
            Our relationship executive will contact you shortly on{" "}
            <span className="font-semibold">{formData.phoneNumber}</span> to confirm your cab pickup.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2 bg-brand-emerald text-white rounded-lg text-sm font-semibold hover:bg-brand-slate transition-colors"
          >
            Book Another Visit
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="text-center space-y-1 mb-6">
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Schedule A Free Cab Tour
            </span>
            <h2 className="text-2xl font-extrabold text-brand-emerald">
              Book Your Free Site Visit
            </h2>
            <p className="text-xs text-gray-500">
              Pick a date & time. We will arrange free pick-and-drop transportation.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Enter your name"
                className="w-full pl-10 pr-4 py-2.5 bg-brand-parchment/50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Mobile Number *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-4 py-2.5 bg-brand-parchment/50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          {/* Select Project */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Select Preferred Project *
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <select
                value={formData.preferredProject}
                onChange={(e) => setFormData({ ...formData, preferredProject: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-brand-parchment/50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-gold text-gray-700 appearance-none"
              >
                {PROJECTS_DATA.map((proj) => (
                  <option key={proj.id} value={proj.title}>
                    {proj.title} ({proj.location})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Preferred Date *
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-brand-parchment/50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-gold text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Time Slot
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-brand-parchment/50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-gold text-gray-700 appearance-none"
                >
                  <option>10:00 AM</option>
                  <option>12:00 PM</option>
                  <option>02:30 PM</option>
                  <option>05:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-brand-gold hover:bg-brand-goldHover text-brand-emerald font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-2"
          >
            Confirm & Reserve Free Cab
          </button>
        </form>
      )}
    </div>
  );
}
