import { ProjectInterface } from "@/common.types";
import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";
import Link from "next/link";


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
import Image from 'next/image';

const Home = async ({ searchParams: { category, endcursor } }: Props) => {
  return (
    <section className="flexStart flex-col paddings mb-16">
      <div style={{ position: 'relative', width: '100%' }}>
        <Image src="/A.svg" layout="responsive" width={800} height={300} alt="Your Image" />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center' }}>
          <Link href="http://localhost:3000/" style={{ background: 'rgba(0, 0, 0, 0.3)', color: 'white', padding: '15px 30px', marginRight: '20px', border: 'none', cursor: 'pointer', borderRadius: '20px', fontSize: '24px' }}>Lender</Link>
          <Link href="http://localhost:3000/" style={{ background: 'rgba(0, 0, 0, 0.3)', color: 'white', padding: '15px 30px', border: 'none', cursor: 'pointer', borderRadius: '20px', fontSize: '24px' }}>Borrower</Link>
        </div>
        <div style={{ position: 'absolute',top: '60%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', fontSize: '40px', fontFamily: 'cursive'  }}> {/* Style this div for your text */}
          Find the perfect Value for you
        </div>
      </div>
    </section>
  );
};

export default Home;

