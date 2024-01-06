import { Title } from "@/component/title";
import { PortfolioType } from "@/utils/interfaces/Portfolio";
import Image from "next/image";
import portfolio from "../../json/portofolio.json";
import { useRouter } from "next/router";

function Blog() {
  const router = useRouter();
  return (
    <div className="relative pb-10 -mt-8 md:mt-0">
      <Title>Let&#39;s increase our knowledge by reading</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8 w-full">
        <div
          className="relative bg-grey rounded-lg hover:shadow-lg hover:cursor-pointer"
          onClick={() => router.push("/blog/array-javascript")}
        >
          <Image
            className="h-52 w-full rounded-t-lg"
            src={"/assets/blog/javascript.png"}
            width={1000}
            height={200}
            alt={"thumbnail"}
          />
          <div className="m-4">
            <div className="text-lg font-semibold">Array Javascript</div>
            <div className="text-sm line-clamp-2">
              Array dalam JavaScript adalah kumpulan item yang dapat berupa tipe
              data apa pun, memungkinkan untuk menyimpan, mengakses, dan
              memanipulasi kumpulan data dalam satu variabel tunggal.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: portfolio.data,
    },
  };
}

export default Blog;
