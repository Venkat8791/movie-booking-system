import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="w-full min-w-30 max-w-50 block">
      <Image src="/logo.png" alt="mx cinemas logo" width={70} height={50} />
    </Link>
  );
};
export default Logo;
