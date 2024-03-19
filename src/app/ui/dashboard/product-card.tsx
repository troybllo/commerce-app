import { Product } from "@/app/lib/definitions";
import Image from "next/image";

export default async function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col p-7">
      <div key={product.id} className="flex flex-col gap-6">
        <div className="border-b-white border-b-2">
          <Image src="/hoodie.png" width={700} height={700} alt="_" />
        </div>
        <div className="flex flex-row items-center gap-4  bg-black rounded-2xl border-white border-2 justify-start p-0">
          <div>{product.name}</div>
          <div className="flex bg-white text-black font-extrabold rounded-2xl ml-5 mr-0 justify-end p-1 ">
            <p>Price ${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Card({ product }: { product: Product }) {
  return (
    <div className="flex flex-row p-7">
      <div key={product.id} className="flex flex-col gap-6">
        <div className="border-b-white border-b-2">
          <Image src="/hoodie.png" width={700} height={700} alt="_" />
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <div>{product.name}</div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </div>
          <div className="flex bg-white text-black font-extrabold rounded-2xl ml-5 mr-0 justify-end p-1 ">
            <p>Price ${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
