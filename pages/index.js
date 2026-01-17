function Home(){
  return <h1>import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Beer, Users, Sparkles } from "lucide-react";

export default function InimigosLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-5xl w-full"
      >
        <Card className="bg-zinc-900/80 backdrop-blur border-zinc-800 shadow-2xl rounded-2xl">
          <CardContent className="p-10 md:p-14 text-center space-y-10">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              🍻 Inimigos Oficial
            </motion.h1>

            <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto">
              Depois de muita <strong>bebedeira</strong>, muita <strong>viadagem</strong> e decisões
              questionáveis a partir do dia 16/01/2026 às 22:42 horário de Brasília-DF…
              <br />
              <span className="text-white font-semibold">os Inimigos agora têm um espaço na internet.</span>
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-3 gap-6 mt-8"
            >
              <Feature
                icon={<Users />}
                title="Grupo Seleto"
                desc="Amizade baseada em zoação pesada, risadas altas e áudios que não podem vazar." />
              <Feature
                icon={<Beer />}
                title="Alta Alcoolemia"
                desc="Conteúdo pensado sob efeito de cerveja quente, gin duvidoso e decisões ruins." />
              <Feature
                icon={<Sparkles />}
                title="Tecnologia de Ponta"
                desc="React moderno pra um grupo que ainda escreve 'vc' e 'pq'." />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-6"
            >
              <Button className="px-10 py-6 text-lg rounded-xl">
                Entrar por conta e risco
              </Button>
            </motion.div>

            <p className="text-sm text-zinc-500 pt-4">
              ⚠️ Aviso legal: este site não se responsabiliza por amizades abaladas,
              ressacas morais ou prints fora de contexto.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-zinc-800/80 backdrop-blur rounded-2xl p-6 space-y-4"
    >
      <div className="flex justify-center text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
</h1>
}

export default Home;
