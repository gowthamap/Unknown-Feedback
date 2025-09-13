"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Listbox } from "@headlessui/react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [feedback, setFeedback] = useState("");
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // const people = ["John", "Mary", "Alex", "Sara", "Chinchu", "Soorya"];

  return (
    <div className="flex justify-center items-center h-auto min-w-3xl bg-blue-300 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white">
        <CardContent className="p-6 space-y-6">
          {!submitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold text-center text-blue-700">
                Feedback Form
              </h2>

              {/* Dropdown */}
              <div>
                <h2>Name to the person</h2>
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
              </div>

              {/* Title */}
              <div>
                <h2>TITLE</h2>
                <input
                  type="text"
                  className="w-full border border-blue-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Feedback */}
              <div>
                <h2>Feedback</h2>
                <textarea
                  className="w-full border border-blue-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  rows={5}
                  placeholder="Your feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>

              {/* Six Digit Code */}
              <div>
                <h2>Enter Code</h2>
                <input
                  type="number"
                  // maxLength="6"
                  className="w-full border border-blue-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter 6-digit code"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/, ""))}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold"
                disabled={!name || !title || !feedback || code.length !== 6}
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
