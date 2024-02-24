import { ProjectInterface } from "@/common.types";
import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
}

type Props = {
  searchParams: SearchParams
}

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  },
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

<<<<<<< HEAD
import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/background.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}
=======
import Image from 'next/image';

const Home = async ({ searchParams: { category, endcursor } }: Props) => {
  return (
    <section className="flexStart flex-col paddings mb-16">
      <div style={{ width: '100%' }}>
        <Image src="/A.svg" layout="responsive" width={800} height={300} alt="Your Image" />
      </div>
    </section>
  );
};


export default Home;
>>>>>>> 60817197fe88cece1b482a357d27ddac0f4698e2
