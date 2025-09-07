"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [feedback, setFeedback] = useState("");
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white">
        <CardContent className="p-6 space-y-6">
          {!submitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold text-center text-blue-700">
                Feedback Form
              </h2>

              {/* Dropdown */}
              <select
                className="w-full border border-blue-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                <option value="">Select a name</option>
                <option value="John">John</option>
                <option value="Mary">Mary</option>
                <option value="Alex">Alex</option>
                <option value="Sara">Sara</option>
              </select>

              {/* Title */}
              <input
                type="text"
                className="w-full border border-blue-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              {/* Feedback */}
              <textarea
                className="w-full border border-blue-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                rows="3"
                placeholder="Your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

              {/* Six Digit Code */}
              <input
                type="text"
                maxLength="6"
                className="w-full border border-blue-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter 6-digit code"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/, ""))}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium"
                // disabled={!name || !title || !feedback || code.length !== 6}
              >
                Submit
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-3">
              <h3 className="text-lg font-semibold text-green-600">
                🎉 Thank you!
              </h3>
              <p className="text-gray-600 text-sm">
                Your feedback has been submitted successfully.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
