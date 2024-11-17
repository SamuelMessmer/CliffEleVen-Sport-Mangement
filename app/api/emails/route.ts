import Welcome from "@/emails/Welcome";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import schema from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { message: "Daten konnten nicht validiert werden" },
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
      { "Serverseitiger Fehler der API": error },
      { status: 500 }
    );

  return NextResponse.json({ "Gesendete Daten:": data }, { status: 200 });
}
