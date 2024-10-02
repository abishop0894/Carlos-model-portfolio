
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./modules/components/ui/navBar";
import { Hero } from "./modules/headers/hero";


export default function App() {
  return (
    <NextUIProvider>
    <>
<NavBar menuItems={["Portfolio", "About", "Book", "Contact"]}/>
<Hero/>
    {/* <Row 
  heading="Amazing Heading"
  paragraph="This is an optional paragraph explaining more about the content."
  button={true}
  buttonContent={
    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
      Click Me
    </button>
  }
  mediaSrc="https://huntertalent.com.au/wp-content/uploads/2024/04/male-fashion-model-698x1024.jpg"
  mediaType="image"  // Use 'video' for videos
/>
<RowLeft 
  heading="Amazing Heading"
  paragraph="This is an optional paragraph explaining more about the content."
  button={true}
  buttonContent={
    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
      Click Me
    </button>
  }
  mediaSrc="https://huntertalent.com.au/wp-content/uploads/2024/04/male-fashion-model-698x1024.jpg"
  mediaType="image"  // Use 'video' for videos
/> */}
    </>
    </NextUIProvider>
  );
}
