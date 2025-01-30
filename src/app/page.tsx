import { Button, Text } from "@jamsr-ui/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-dvh">
      <h1 className="text-5xl bg-content1">Hello world!</h1>
      <Text as="h2" variant="h3">
        Hello World! 2
      </Text>
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
}
