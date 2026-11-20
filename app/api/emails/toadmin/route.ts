import Info from "@/emails/Info";
import schema from "../schema";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const validation = schema.safeParse(await req.json());

  if (!validation.success)
    return NextResponse.json(
      { message: "Invalid Request, validation failed!" },
      { status: 400 }
    );

  const body = validation.data;

  const { error, data } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["samuel.messmer@web.de"],
    subject: "Neue Kunden Anfrage auf deiner Website!",
    react: Info(
      body.firstname,
      body.lastname,
      body.email,
      body.telephoneNumber,
      body.message
    ),
  });

  if (error)
    return NextResponse.json(
      { "Internal server error: ": error },
      { status: 500 }
    );

  return NextResponse.json({ "Success, data: ": data }, { status: 200 });
}
