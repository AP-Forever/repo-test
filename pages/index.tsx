import Image from "next/image";

export default function Page() {
  return (
    <Image src="/vercel.svg" alt="Test" width={500} height={300} priority />
  );
}
