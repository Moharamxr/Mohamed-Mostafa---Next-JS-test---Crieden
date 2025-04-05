import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className="flex justify-start items-center flex-col px-10 py-7 min-h-screen">
      <h2
        className="font-normal text-[42px] leading-[32px] tracking-normal text-center align-middle capitalize"
        style={{ fontFamily: "Volkhov" }}
      >
        Home
      </h2>
      <Products />
    </div>
  );
}
