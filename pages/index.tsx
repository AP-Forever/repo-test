import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Image Freeze Bug Test</h1>

      {mounted && (
        <>
          <Image
            src="https://picsum.photos/id/1015/1200/800"
            alt="Test 1"
            width={1200}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Image
            src="https://picsum.photos/id/237/800/600"
            alt="Test 2"
            width={800}
            height={600}
            sizes="50vw"
            quality={85}
          />
        </>
      )}
    </main>
  );
}

export const getServerSideProps = async () => ({ props: {} });
