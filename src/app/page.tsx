import { SeatsFlow } from "@/flows/seats";

export default function Home() {
  return (
    <div className="flex flex-col justify-start overflow-y-auto h-[100vh] w-[100%]">
      <main className="flex flex-col items-center sm:items-start justify-start">
        <SeatsFlow />
      </main>
    </div>
  );
}
