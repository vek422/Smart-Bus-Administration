import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function TabsLayout() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
