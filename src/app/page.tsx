import { Button } from "@/components/ui/button";
import { SelectBrand } from "./../components/select-brand";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-80">
      <h1 className="mb-0">Welcome To Paradise Tech VN - SSL Dash Board</h1>
      <p>Please select which brand you prefer to view</p>
      <SelectBrand></SelectBrand>
    </div>
  );
}
