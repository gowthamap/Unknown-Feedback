import Image from "next/image";
import FeedbackForm from "./components/Form";

export default function Home() {
  return (
    <div className="font-sans h-screen w-screen">
      <FeedbackForm />
    </div>
  );
}
