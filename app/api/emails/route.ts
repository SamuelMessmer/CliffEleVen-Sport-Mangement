import Welcome from "@/emails/Welcome";
import schema from "./schema";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { message: "Invalid Request, validation failed!" },
      { status: 400 }
    );

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [`${body.email}`],
    subject: `Herzlich Willkommen ${body.firstname}!`,
    react: Welcome(body.firstname),
  });

  if (error)
    return NextResponse.json(
      { "Internal server error: ": error },
      { status: 500 }
    );

  return NextResponse.json({ "Success, data: ": data }, { status: 200 });
}
