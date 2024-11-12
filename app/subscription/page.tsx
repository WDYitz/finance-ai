import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { auth } from "@clerk/nextjs/server";
import { CheckIcon, XIcon } from "lucide-react";
import { redirect } from "next/navigation";
import AcquirePlanButton from "./_components/acquire-plan-button";

const SubscriptionPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/login");

  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Assinatura</h1>
        <div className="flex gap-6">
          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8 space-y-6">
              <h2 className="text-center text-2xl font-semibold">Plano Básico</h2>
              <div className="flex items-center gap-3 justify-center">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-semibold">0</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 py-8">
              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Apenas 10 transações por mês (7/10)</p>
              </div>
              <div className="flex items-center gap-3">
                <XIcon />
                <p>Relatórios de IA ilimitados</p>
              </div>
              <div className="flex items-center gap-3">
                <XIcon />
                <p>Temas personalizados</p>
              </div>
              <Button variant="outline" className="w-full rounded-full font-bold h-12 text-primary border-primary hover:bg-muted hover:bg-opacity-[0%]">
                Fazer Upgrade
              </Button>
            </CardContent>
          </Card>
          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8 space-y-6">
              <h2 className="text-center text-2xl font-semibold">Plano Pro</h2>
              <div className="flex items-center gap-3 justify-center">
                <span className="text-4xl">R$</span>
                <span className="text-6xl font-semibold">17</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 py-8">
              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Transações ilimitadas</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Relatórios de IA</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Temas personalizados</p>
              </div>
              <AcquirePlanButton />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
