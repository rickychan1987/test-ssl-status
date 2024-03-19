import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>SSL-Status</h1>
      <Button>Choose Brand</Button>
      <p>Please select which brand you prefer to view</p>
    </main>
  );
}
