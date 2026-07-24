"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Por favor, informe seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  phone: z.string().min(8, "Informe um telefone ou WhatsApp válido."),
  company: z.string().optional(),
  interestArea: z.enum([
    "contabilidade",
    "mo-publicidade",
    "desenvolvimento",
    "digmidia",
    "sistemas-supermercados",
    "solucoes-integradas",
    "outros",
  ], {
    errorMap: () => ({ message: "Selecione uma área de interesse." }),
  }),
  message: z.string().min(5, "Escreva uma breve mensagem."),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interestArea: "solucoes-integradas",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.success) {
        setSubmitSuccess(true);
        reset();
      } else {
        setErrorMessage(res.message || "Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (err) {
      setErrorMessage("Erro de rede ao conectar com o servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-emerald-900/40 border border-emerald-500/50 rounded-2xl p-6 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
        <h3 className="text-xl font-bold font-heading text-white">Mensagem Enviada com Sucesso!</h3>
        <p className="text-sm text-emerald-100 max-w-md mx-auto">
          Obrigado pelo contato! Nossa equipe de especialistas do Grupo BRM retornará em breve.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-2 text-xs font-bold text-emerald-300 underline hover:text-white"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      {errorMessage && (
        <div className="p-3 bg-red-900/50 border border-red-500/50 rounded-xl text-xs text-red-200 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {compact ? (
        /* Compact Horizontal / Inline Form for Home Bar */
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <input
                {...register("name")}
                type="text"
                placeholder="Seu nome*"
                className="w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && <span className="text-[10px] text-red-300 mt-1 block">{errors.name.message}</span>}
            </div>

            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Seu e-mail*"
                className="w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <span className="text-[10px] text-red-300 mt-1 block">{errors.email.message}</span>}
            </div>

            <div>
              <input
                {...register("phone")}
                type="tel"
                placeholder="Telefone / WhatsApp*"
                className="w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.phone && <span className="text-[10px] text-red-300 mt-1 block">{errors.phone.message}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <select
                {...register("interestArea")}
                className="w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="solucoes-integradas">Soluções integradas</option>
                <option value="contabilidade">Contabilidade</option>
                <option value="mo-publicidade">M.O Publicidade</option>
                <option value="desenvolvimento">Desenvolvimento</option>
                <option value="digmidia">DIGMIDIA</option>
                <option value="sistemas-supermercados">Sistemas para supermercados</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div>
              <input
                {...register("message")}
                type="text"
                placeholder="Sua mensagem*"
                className="w-full px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.message && <span className="text-[10px] text-red-300 mt-1 block">{errors.message.message}</span>}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#0878D1] hover:bg-[#0754A6] text-white font-bold font-heading text-xs rounded-xl transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin text-white" />
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Enviar mensagem</span>
              </>
            )}
          </button>
        </div>
      ) : (
        /* Full Form for Dedicated Contact Page */
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Nome completo*</label>
              <input
                {...register("name")}
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-brm-border text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
                placeholder="Seu nome"
              />
              {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">E-mail corporativo*</label>
              <input
                {...register("email")}
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-brm-border text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
                placeholder="seu.email@empresa.com.br"
              />
              {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Telefone / WhatsApp*</label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-brm-border text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
                placeholder="(11) 99999-9999"
              />
              {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Nome da Empresa</label>
              <input
                {...register("company")}
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-brm-border text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
                placeholder="Sua empresa"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Área de Interesse*</label>
            <select
              {...register("interestArea")}
              className="w-full px-4 py-3 rounded-xl border border-brm-border text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
            >
              <option value="solucoes-integradas">Soluções integradas Grupo BRM</option>
              <option value="contabilidade">Contabilidade</option>
              <option value="mo-publicidade">M.O Publicidade</option>
              <option value="desenvolvimento">Desenvolvimento de software</option>
              <option value="digmidia">DIGMIDIA (TV indoor, encartes digitais)</option>
              <option value="sistemas-supermercados">Sistemas para supermercados</option>
              <option value="outros">Outros assuntos</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Mensagem*</label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-brm-border text-sm focus:outline-none focus:ring-2 focus:ring-[#0754A6]"
              placeholder="Como podemos ajudar o seu negócio?"
            />
            {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[#0754A6] hover:bg-[#064385] text-white font-bold font-heading rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm shadow-md"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin text-white" />
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Enviar mensagem</span>
              </>
            )}
          </button>
        </div>
      )}
    </form>
  );
};
