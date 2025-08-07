import Avatar from "@/components/Avatar";
import Information from "@/components/Information";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <main className="container mx-auto h-[85vh] flex justify-center items-center">
      <div className="w-full flex flex-col gap-y-8 lg:flex-row justify-between ">
        <Information />
        <Avatar />
      </div>
    </main>
  );
}
