import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image className="mb-8" src="/Logo.svg" width={173} height={39} alt={"logo"} />
        <h1 className="mb-3 text-white text-4xl font-bold">Bem-vindo</h1>           {/*Retirar a cor branca */}
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant='outline' className="text-white">                             {/*Retirar a cor branca */}
          <LogInIcon className="mr-2" />
          Fazer login ou Criar conta
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image
          className="object-cover"
          src="/bg-login.png"
          fill
          alt="Faça login"
        />
      </div>
    </div>
  );
};
export default LoginPage;