import Image from "next/image";
import type { GetServerSideProps } from "next";

type Props = {};

export default function Home({}: Props) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Next.js Image Sort Bug Test (Pages Router)</h1>
      <p>Check Vercel logs for crash</p>

      <Image
        src="https://picsum.photos/id/1015/1200/800"
        alt="Test image"
        width={1200}
        height={800}
        priority
        unoptimized // ← add this
      />

      {/* Multiple images to increase chance of hitting the code path */}
      <Image
        src="https://picsum.photos/id/237/800/600"
        alt="Another test"
        width={800}
        height={600}
        sizes="50vw"
        unoptimized
      />
    </main>
  );
}

// Force SSR
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
