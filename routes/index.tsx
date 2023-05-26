import { Handlers, PageProps } from "$fresh/server.ts";
import QuoteX from "../islands/QuoteX.tsx";
interface Quote {
  anime: string;
  character: string;
  quote: string;
}

export const handler: Handlers<Quote | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://animechan.vercel.app/api/random`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const quote: Quote = await resp.json();
    return ctx.render(quote);
  },
};

export default function Page({ data }: PageProps<Quote | null>) {
  if (!data) {
    return <h1>Something went wrong</h1>;
  }
  return <QuoteX data={data} />;
}
