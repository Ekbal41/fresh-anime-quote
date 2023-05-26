import { Handlers, PageProps } from "$fresh/server.ts";

interface Quote {
  anime: string;
  character: string;
  quote: string;
}
interface QuoteProps {
  data: Quote;
}

export default function QuoteX(props: QuoteProps | null) {
  return (
    <>
      <div
        style={{
          position: "relative",
        }}
        class="flex flex-col mx-auto my-20 h-48 w-6/12 p-4 bg-gray-100 rounded-lg shadow justify-start "
      >
        <h1 class="font-bold text-indigo-500">{props?.data?.character}</h1>
        <h3 class="font-bold text-gray-300">{props?.data?.anime}</h3>
        <p class="text-gray-500">{props?.data?.quote}</p>
        <button
          class="bg-indigo-500 m-3 px-2 py-1 rounded-lg text-white hover:bg-indigo-600 shadow"
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
          }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
      </div>
    </>
  );
}
