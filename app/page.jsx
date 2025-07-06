import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function RapunzelCaps() {
  useEffect(() => {
    document.title = "Fios de Rapunzel - A Cápsula do Crescimento";
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col gap-16">
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          A cápsula que transforma seus fios de dentro pra fora
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-300"
        >
          Fórmula completa com Biotina, Vitamina B6, Zinco, Ácido Hialurônico e mais.
        </motion.p>
        <div className="mt-10">
          <Button className="text-lg px-6 py-3">Comprar Agora</Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <img
          src="/images/fios-pote-capsulas.png"
          alt="Pote Fios de Rapunzel"
          className="w-full rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">O que tem dentro da cápsula?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Biotina + Vitamina B6 → crescimento e força</li>
            <li>Zinco + Selênio → redução de queda</li>
            <li>Ácido Hialurônico + Colágeno → brilho e hidratação</li>
            <li>Cápsula vegetal, sem glúten, sem lactose</li>
          </ul>
        </div>
      </section>

      <section className="bg-white text-black py-16 px-6 rounded-2xl max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Como funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">1 cápsula ao dia</h3>
              <p>Fácil de tomar, com água ou suco, a qualquer hora do dia.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Nutre de dentro pra fora</h3>
              <p>Ativos atuam no bulbo capilar e couro cabeludo.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Resultados visíveis</h3>
              <p>Em poucas semanas, crescimento, brilho e redução da queda.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Veja resultados reais</h2>
        <img
          src="/images/antes-depois.png"
          alt="Antes e Depois"
          className="rounded-xl shadow-lg"
        />
        <p className="text-gray-300 mt-4">Fotos enviadas por clientes reais após 90 dias de uso contínuo.</p>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-20">
        © 2025 Fios de Rapunzel. Todos os direitos reservados. <br />
        Atendimento: contato@fiosderapunzel.com | WhatsApp: (11) 99999-9999
      </footer>
    </main>
  );
}
