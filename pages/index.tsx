import Image from "next/image";

export default function Page() {
  return (
    <main>
      <h1>Next.js Image Freeze Test</h1>
      <Image
        src="https://picsum.photos/id/1015/800/600" // remote image
        alt="Test image"
        width={800}
        height={600}
        quality={85}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </main>
  );
}
