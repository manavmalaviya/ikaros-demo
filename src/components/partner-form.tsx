"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"


//import "react-country-state-city/dist/react-country-state-city.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import AddData from "@/lib/firebase"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  pincode: z.string().min(1, { message: 'Pincode is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  city: z.string().min(1, { message: 'city name is required' }),
  state: z.string().min(1, { message: 'State name is required' }),
  companyName: z.string().min(1, { message: 'Company name is required' }),
  phoneNumber: z.string().regex(/^[0-9]+$/, { message: 'Phone number can only contain digits' }),
  description: z.string().min(1, { message: 'Message is required' }),
});

export function PartnerForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      pincode: "",
      companyName: "",
      phoneNumber: "",
      description: "",
    },
  })

  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await AddData("partners", values);
    toast({
      title: "Success!",
      description: "Your forms have been submitted! We will contact you shortly.",
    })

    form.reset();
  }

  return (


    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-5 flex-wrap md:w-3/4 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input className="input-form-field" placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Company Name</FormLabel>
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="input-form-field" placeholder="Email Address" {...field} />
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
        {/* <p>Address </p> */}
        {/* <Separator orientation="horizontal" /> */}
        <FormField
          key={"address"}
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="md:w-3/4 w-full">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-between w-3/4 md:min-w-[700px] flex-wrap md:flex-nowrap">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input className="input-form-field" placeholder="City" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input className="input-form-field" placeholder="State" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pincode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PinCode</FormLabel>
                <FormControl>
                  <Input className="input-form-field" placeholder="Pin code" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          key={"description"}
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="md:w-3/4 w-full">
              <FormLabel>Describe</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your company here" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>

      </form>
    </Form>

  )
}
