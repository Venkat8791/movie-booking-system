import Link from "next/link";
// import logo from "@/public/logo.png";
import Image from "next/image";
export default function Logo() {
  return (
    <Link href="/" className="w-full min-w-30 max-w-50 block">
      <Image src="/logo.png" alt="mx cinemas logo" width={70} height={50} />
    </Link>
  );
}
