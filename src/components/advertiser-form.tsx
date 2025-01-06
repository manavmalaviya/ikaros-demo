"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import AddData from "@/lib/firebase";


const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  storeName: z.string().min(1, { message: 'Company name is required' }),
  phoneNumber: z.string().regex(/^[0-9]+$/, { message: 'Phone number can only contain digits' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

export function AdvertiserForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      storeName: "",
      phoneNumber: "",
      message: "",
    },
  })
  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      
      await AddData("advertisers", values);
      
      toast({
        title: "Success!",
        description: "Your forms have been submitted! We will contact you shortly.",
      });
      form.reset();
    } catch (error) {
      console.log("erro logged", error)
    }

  }
  return (
    <>
      {/* <p>Get in touch with us</p> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

          <div className="flex gap-5 flex-wrap md:w-3/4 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-grow ">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="input-form-field" placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="storeName"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Store Name</FormLabel>
                  <FormControl>
                    <Input className="input-form-field " placeholder="Company Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>


          <div className="flex gap-5 flex-wrap md:w-3/4 w-full">

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input className="input-form-field" placeholder="Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              key={"phoneNumber"}
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input className="input-form-field" placeholder="Phone Number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

          </div>

          <FormField
            key={"message"}
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:w-3/4 w-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Please type your message here." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>

        </form>
      </Form>

    </>
  );
}
