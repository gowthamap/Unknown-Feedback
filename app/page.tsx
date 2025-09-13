import Image from "next/image";
import FeedbackForm from "./components/Form";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20">
      <FeedbackForm />
    </div>
  );
}
