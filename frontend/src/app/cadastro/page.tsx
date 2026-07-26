"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiAlertCircle,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
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
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import SquareReveal from "@/components/SquareReveal";
import { useAuth } from "@/hooks/useAuth";
import { PasswordStrength } from "@/components/interface/PasswordStrength";
import { ProgressSteps } from "@/components/interface/ProgressSteps";

// Schema de validação com regras mais robustas
const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
      .max(50, { message: "Nome muito longo" })
      .regex(/^[a-zA-ZÀ-ÿ\s']+$/, {
        message: "Nome deve conter apenas letras",
      }),
    email: z
      .string()
      .email({ message: "E-mail inválido" })
      .min(5, { message: "E-mail muito curto" }),
    password: z
      .string()
      .min(8, { message: "Senha deve ter pelo menos 8 caracteres" })
      .regex(/[A-Z]/, {
        message: "Senha deve conter pelo menos uma letra maiúscula",
      })
      .regex(/[a-z]/, {
        message: "Senha deve conter pelo menos uma letra minúscula",
      })
      .regex(/[0-9]/, { message: "Senha deve conter pelo menos um número" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Senha deve conter pelo menos um caractere especial",
      }),
    confirmPassword: z.string().min(1, { message: "Confirme sua senha" }),
    terms: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os termos e condições",
    }),
    newsletter: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

// Tipos para os passos do formulário
type Step = 1 | 2 | 3;

export default function CadastroPage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [globalError, setGlobalError] = useState("");
  const router = useRouter();
  const { signUp } = useAuth();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      newsletter: false,
    },
    mode: "onChange",
  });

  const watchPassword = form.watch("password");
  const watchName = form.watch("name");
  const watchEmail = form.watch("email");

  // Validação para avançar entre passos
  const canProceedToStep2 = watchName.length >= 2 && watchEmail.length > 0;
  const canProceedToStep3 = watchPassword.length >= 8;

  const handleNextStep = () => {
    if (currentStep === 1 && canProceedToStep2) {
      setCurrentStep(2);
    } else if (currentStep === 2 && canProceedToStep3) {
      setCurrentStep(3);
    } else {
      // Dispara validação para mostrar erros
      if (currentStep === 1) {
        form.trigger(["name", "email"]);
      } else if (currentStep === 2) {
        form.trigger(["password", "confirmPassword"]);
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const onSubmit = async (data: RegisterFormValues) => {
    setLoading(true);
    setGlobalError("");

    try {
      const result = await signUp(data.email, data.password, data.name);
      if (result.error) {
        throw result.error;
      }

      // Simulação de cadastro bem-sucedido
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSuccess(true);
      
      // Redirecionar após delay
      setTimeout(() => {
        router.push("/login?registered=true");
      }, 3000);
    } catch (error: unknown) {
      reportError(error, { component: "RegisterPage", action: "signUp" });
      setGlobalError(
        getErrorMessage(error, "Erro ao cadastrar. Verifique seus dados e tente novamente.")
      );
    } finally {
      setLoading(false);
    }
  };

  // Página de sucesso
  if (success) {
    return (
      <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/20 blur-[150px] rounded-full" />
        
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                  <FiCheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">
                  Cadastro concluído! 🎉
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  Sua conta foi criada com sucesso.
                </p>
                <p className="text-gray-400 text-sm mb-8">
                  Você será redirecionado para a página de login em instantes...
                </p>
                
                <div className="flex gap-3">
                  <Link href="/login" className="flex-1">
                    <Button variant="shiny" className="w-full">
                      Ir para Login
                      <FiArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 overflow-hidden relative">
      <SquareReveal gridSize={12}>
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 blur-[120px] rounded-full" />

          <div className="relative z-10 w-full max-w-md">
            {/* Card Principal */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
              
              {/* Progress Steps */}
              <div className="mb-8">
                <ProgressSteps 
                  currentStep={currentStep} 
                  totalSteps={3}
                  labels={["Dados pessoais", "Senha", "Finalizar"]}
                />
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Criar conta
                </h1>
                <p className="text-gray-400 text-sm mt-2">
                  Preencha os dados para começar sua jornada
                </p>
              </div>

              {/* Global Error */}
              {globalError && (
                <div className="flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 p-3 rounded-xl mb-6 text-sm">
                  <FiAlertCircle className="flex-shrink-0" />
                  <span>{globalError}</span>
                </div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* STEP 1: Dados Pessoais */}
                  {currentStep === 1 && (
                    <div className="space-y-5 animate-fade-in">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300 font-medium">
                              Nome completo
                            </FormLabel>
                            <div className="relative group">
                              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-400 transition-colors z-10" />
                              <FormControl>
                                <Input
                                  placeholder="Seu nome completo"
                                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/20"
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
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300 font-medium">
                              E-mail
                            </FormLabel>
                            <div className="relative group">
                              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-400 transition-colors z-10" />
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="seu@email.com"
                                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/20"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-4">
                        <Button
                          type="button"
                          onClick={handleNextStep}
                          disabled={!canProceedToStep2}
                          variant="shiny"
                          className="w-full"
                        >
                          Continuar
                          <FiArrowRight className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Senha */}
                  {currentStep === 2 && (
                    <div className="space-y-5 animate-fade-in">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300 font-medium">
                              Senha
                            </FormLabel>
                            <div className="relative group">
                              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-400 transition-colors z-10" />
                              <FormControl>
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Crie uma senha forte"
                                  className="pl-10 pr-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/20"
                                  {...field}
                                />
                              </FormControl>
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-400 transition-colors z-10"
                              >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                              </button>
                            </div>
                            <PasswordStrength password={field.value} />
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300 font-medium">
                              Confirmar senha
                            </FormLabel>
                            <div className="relative group">
                              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-400 transition-colors z-10" />
                              <FormControl>
                                <Input
                                  type={showConfirmPassword ? "text" : "password"}
                                  placeholder="Confirme sua senha"
                                  className="pl-10 pr-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/20"
                                  {...field}
                                />
                              </FormControl>
                              <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-400 transition-colors z-10"
                              >
                                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                              </button>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-3 pt-4">
                        <Button
                          type="button"
                          onClick={handlePreviousStep}
                          variant="outline"
                          className="flex-1 border-white/20 text-white hover:bg-white/10"
                        >
                          Voltar
                        </Button>
                        <Button
                          type="button"
                          onClick={handleNextStep}
                          disabled={!canProceedToStep3}
                          variant="shiny"
                          className="flex-1"
                        >
                          Continuar
                          <FiArrowRight className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Finalizar */}
                  {currentStep === 3 && (
                    <div className="space-y-5 animate-fade-in">
                      {/* Resumo dos dados */}
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                        <p className="text-sm text-gray-400">Nome</p>
                        <p className="text-white font-medium">{watchName}</p>
                        <p className="text-sm text-gray-400 mt-2">E-mail</p>
                        <p className="text-white font-medium">{watchEmail}</p>
                      </div>

                      <FormField
                        control={form.control}
                        name="newsletter"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="mt-1"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-gray-300 font-normal cursor-pointer">
                                Desejo receber novidades e conteúdos exclusivos
                              </FormLabel>
                              <FormDescription className="text-gray-500 text-xs">
                                Você pode cancelar a qualquer momento
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-2 bg-white/5 border border-white/10">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="mt-1"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormDescription className="text-gray-400 text-sm">
                                Eu concordo com os{" "}
                                <Link
                                  href="/termos-de-uso"
                                  className="text-primary-400 hover:text-primary-300 transition-colors hover:underline"
                                >
                                  Termos de Uso
                                </Link>{" "}
                                e{" "}
                                <Link
                                  href="/politica-de-privacidade"
                                  className="text-primary-400 hover:text-primary-300 transition-colors hover:underline"
                                >
                                  Política de Privacidade
                                </Link>
                              </FormDescription>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-3 pt-4">
                        <Button
                          type="button"
                          onClick={handlePreviousStep}
                          variant="outline"
                          className="flex-1 border-white/20 text-white hover:bg-white/10"
                        >
                          Voltar
                        </Button>
                        <Button
                          type="submit"
                          disabled={loading}
                          variant="shiny"
                          className="flex-1"
                        >
                          {loading ? (
                            <>
                              <span className="animate-spin mr-2">⏳</span>
                              Criando conta...
                            </>
                          ) : (
                            <>
                              Finalizar cadastro
                              <FiArrowRight className="ml-2" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </Form>

              {/* Link para Login */}
              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-sm text-gray-400">
                  Já tem uma conta?{" "}
                  <Link
                    href="/login"
                    className="text-primary-400 font-medium hover:text-primary-300 transition-colors hover:underline"
                  >
                    Faça login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SquareReveal>
    </main>
  );
}