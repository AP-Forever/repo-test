import Image from "next/image";
import type { GetServerSideProps } from "next";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Image Freeze Test - SSR Heavy</h1>

      {Array.from({ length: 5 }).map((_, i) => (
        <Image
          key={i}
          src={`https://picsum.photos/id/${100 + i}/1200/800`}
          alt={`Test image ${i}`}
          width={1200}
          height={800}
          priority={i === 0}
          quality={85 + (i % 10)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ))}
    </main>
  );
}

// Force full SSR
export const getServerSideProps: GetServerSideProps = async () => {
  // Small delay to simulate real work
  await new Promise((resolve) => setTimeout(resolve, 100));
  return { props: {} };
};
