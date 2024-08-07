import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { BACKEND_BASE_URL } from "../service";
import { toast } from "sonner";
const formSchema = z.object({
  firstName: z.string().min(3, { message: "Name is Too Short" }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "You Need To Select this",
  }),
  age: z.coerce.number().int().min(1, { message: "Invalid Age" }),
  boardingPoint: z.string().min(3, { message: "City Name is too short" }),
  pAddress: z.string().min(5, { message: "Address is too short" }),
  uid: z.string().min(4, { message: "UID is too short" }),
  contactNumber: z.coerce.number().int(),
  email: z.string().email("Invalid Email"),
});

export default function AddUserForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      gender: "male",
      email: "",
      boardingPoint: "",
      pAddress: "",
      contactNumber: undefined,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const res = await fetch(`${BACKEND_BASE_URL}/user/add`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const resJson = await res.json();
    console.log(resJson);
    if (res.status == 201) {
      toast("User Created Successfully");
    } else {
      toast(resJson.message);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-5 mt-5"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uid"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>UID</FormLabel>
              <FormControl>
                <Input placeholder="UID" {...field} />
              </FormControl>
              <FormDescription>UID of RFID card</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input placeholder="Age" {...field} className="" />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-5"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel className="font-normal">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="other" />
                    </FormControl>
                    <FormLabel className="font-normal">Other</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} className="" />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="boardingPoint"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Boarding Point</FormLabel>
              <FormControl>
                <Input placeholder="City" {...field} className="" />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input placeholder="Contact Number" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Permanant Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Address" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-1/4 col-span-2">
          Add
        </Button>
      </form>
    </Form>
  );
}
