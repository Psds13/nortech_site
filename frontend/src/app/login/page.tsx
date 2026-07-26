"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import AuthShell from "../components/auth/AuthShell";
import FormAlert from "../components/auth/FormAlert";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getErrorMessage, reportError } from "@/lib/logger";

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
import { Checkbox } from "@/components/ui/checkbox";

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(1, { message: "Senha é obrigatória" }),
  stayLogged: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      stayLogged: false,
    },
  });

  const onSubmit = async () => {
    setError("");
    setLoading(true);

    try {
      // MODO TESTE: Redirecionar direto para não depender do Supabase logar
      router.push("/");
    } catch (err) {
      reportError(err, { component: "LoginPage", action: "signIn" });
      setError(getErrorMessage(err, "Credenciais inválidas ou erro no servidor"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">Bem-vindo de volta</h2>
        <p className="text-gray-400 text-sm mt-2">Acesse sua conta para continuar</p>
      </div>

      <FormAlert message={error} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Email</FormLabel>
                <div className="relative group">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-300 z-10" />
                  <FormControl>
                    <Input
                      placeholder="seu@email.com"
                      className="pl-10"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Senha</FormLabel>
                <div className="relative group">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-300 z-10" />
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Sua senha"
                      className="pl-10 pr-10"
                      {...field}
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors z-10"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="stayLogged"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-gray-400 cursor-pointer font-normal">
                      Manter conectado
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Link href="/esqueci-senha" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors hover:underline decoration-cyan-500/30">
              Esqueci a senha?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={loading}
            variant="shiny"
            className="w-full py-6 text-base"
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </Form>

      <div className="mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-sm text-gray-400">
          Não tem conta?{" "}
          <Link href="/cadastro" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors hover:underline decoration-cyan-500/30">
            Criar nova conta
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
