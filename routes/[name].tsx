import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <>
      <div class="flex w-full h-full justify-center items-center mt-20 font-bold text-2xl">
        {" "}
        Welcome to the world of deno land <span class="text-indigo-500 mx-2 capitalize">{props.params.name}</span>!
      </div>
    </>
  );
}
