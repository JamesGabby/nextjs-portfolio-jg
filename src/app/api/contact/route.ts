import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store the inquiry in a database
    // 3. Send a notification to yourself
    // 4. Add to a CRM

    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", validatedData);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Example: Send email with Resend (uncomment and configure)
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'website@jamesgabbitus.dev',
      to: 'jamesgabbitus@gmail.com',
      subject: `New Project Inquiry: ${validatedData.projectType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });
    */

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { message: "Invalid form data" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}