import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Endereço de e-mail inválido"),
  phone: z.string().min(8, "Telefone deve ter pelo menos 8 dígitos"),
  company: z.string().optional(),
  interestArea: z.enum([
    "contabilidade",
    "mo-publicidade",
    "desenvolvimento",
    "digmidia",
    "sistemas-supermercados",
    "solucoes-integradas",
    "outros",
  ]),
  message: z.string().min(5, "A mensagem deve ter pelo menos 5 caracteres"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, company, interestArea, message } = result.data;

    /**
     * INTEGRAÇÃO DE BACKEND:
     * Aqui você pode conectar com seu provedor de e-mail (Resend, SendGrid, Nodemailer),
     * sistema de CRM (Hubspot, RD Station) ou webhook de WhatsApp.
     */
    console.log("[NOVO CONTATO SITE GRUPO BRM]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      company: company || "Não informado",
      interestArea,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem recebida com sucesso! Em breve um especialista entrará em contato.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro no processamento do formulário de contato:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.",
      },
      { status: 500 }
    );
  }
}
