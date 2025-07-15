
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createClient } from '@supabase/supabase-js';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  institution: z.string().optional(),
  company: z.string().optional(),
  whatsapp: z.string().optional(),
});

interface NotifyFormProps {
  productId: string;
  productName: string;
  onSuccess?: () => void;
}

// Check if environment variables are available and provide fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client only if URL and key are available
let supabase: ReturnType<typeof createClient> | null = null;
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

const NotifyForm = ({ productId, productName, onSuccess }: NotifyFormProps) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      institution: "",
      company: "",
      whatsapp: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Check if Supabase client exists
      if (!supabase) {
        toast({
          variant: "destructive",
          title: "Configuration Error",
          description: "The notification service is not properly configured. Please contact support.",
        });
        return;
      }

      const { error } = await supabase
        .from('product_notifications')
        .insert([
          {
            ...values,
            product_id: productId,
          },
        ]);

      if (error) throw error;

      toast({
        title: "Successfully Registered",
        description: `Thank you ${values.name}! We'll notify you when ${productName} launches.`,
      });

      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error("Notification submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your notification request.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your institution" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your WhatsApp number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Notify Me at Launch
        </Button>
      </form>
    </Form>
  );
};

export default NotifyForm;
