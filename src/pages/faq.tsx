import { Acordation } from "@/components/Acordation";
import { PageLayout } from "@/layouts/PageLayout";
import { NextPage } from "next";
import React from "react";

const FaqPage: NextPage = () => {
  return (
    <PageLayout
      title="FAQ"
      description="Nevíš si s něčím rady? Tak tady možná najdeš odpověď, pokud ne, tak se nás neboj kontaktovat!"
    >
      <div className="shadow-lg lg:p-10">
        {faqs &&
          faqs.map((item, id) => {
            const { question, answer } = item;
            return <Acordation key={id} title={question} text={answer} />;
          })}
      </div>
    </PageLayout>
  );
};

const faqs = [
  {
    question: "Proč na serveru nemáte rezidence?",
    answer:
      "Protože náš server je semi-vanilla a residence do této definice nespadají. V případě griefu (zničení stavby cizím hráčem, krádeže apod.) kontaktujte admin tým, který je schopen věci vrátit a dohledat viníka.",
  },
  {
    question: "Proč nevidím svůj skin?",
    answer:
      "Pokud nevidíš svůj skin, stačí napsat příkaz /premium a dodržet vypsané instrukce.",
  },
  {
    question: "Můžu nějak podpořit server?",
    answer: "Můžu nějak podpořit server?",
  },
  {
    question: "Kdy bude nábor do admin teamu?",
    answer:
      "Vždy když budeme potřebovat nové síly do našeho týmu. Veškeré informace a oznámení se dozvíš na našem discordu",
  },
  {
    question: "Zkopírujete mi dům?",
    answer: "Ne, odporuje to zásadám semi-vanilly.",
  },
  {
    question: "Jak se dostanu do přírody?",
    answer:
      "Pro teleportaci na náhodnou pozici, kde můžete začít svůj survival, lze použít portál na spawnu nebo příkaz /rtp.",
  },
  {
    question: "Jak dlouho ručíte za moje stavby?",
    answer: "Za stavby ručíme pouze po dobu tří měsíců!",
  },
  {
    question: "Co způsobuje lagy na serveru?",
    answer:
      "Většinou jde o nadměrné množství mobů v hráčských farmách / vypalování lesů atd. Faktory se snažíme eliminovat a pracovat na stabilitě serveru.",
  },
  {
    question: "Může admin změnit den/noc/počasí?",
    answer: "Ne, admin nemůže měnit počasí/denní dobu na serveru",
  },
  {
    question: "Jaké mohu na serveru využít příkazy?",
    answer: "Seznam přístupných příkazů zobrazíš pomocí /help",
  },
  {
    question: "Je na serveru dynmapa?",
    answer:
      "Ne, na našem serveru není veřejně přístupná dynmapa (a v budoucnu jí neplánujeme).",
  },
];

export default FaqPage;
