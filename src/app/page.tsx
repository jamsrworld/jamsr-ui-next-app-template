import { Button } from "@jamsr-ui/react";
export default function Home() {
  return (
    <div className="flex gap-4 justify-center items-center h-dvh">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
}
