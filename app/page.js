import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "./components/loadingComponent";
export default function Home() {
  return (
    <>
    <div className="">
     this is base page
    </div>
    <Link href={"/LogIn-SignUp"}>Go to about</Link>
    <LoadingSpinner />
    </>
  );
}
