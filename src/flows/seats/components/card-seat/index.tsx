import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CardsSeat() {
  return (
    // TODO: Arrumar a sombra
    <div className="flex flex-col h-auto border-zinc-500 rounded-[8px] border-[1px] shadow-md shadow-green-50 flex-1 p-4 gap-6">
      <div className="flex flex-col justify-center text-base w-full h-auto gap-4">
        <span className="mx-auto">Assentos Disponíveis - Mesa 1</span>
        <span className="mx-auto rounded-full w-fit h-fit p-4 px-6 border-[1px] border-green-200 bg-slate-50 bg-opacity-35">
          <strong className=" text-lg">1</strong>
        </span>
      </div>

      {/* <div>Visualizar quem está sentado</div> */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Visualizar quem está sentado</AccordionTrigger>
          <AccordionContent>Gabriel Gomes</AccordionContent>
        </AccordionItem>
      </Accordion>

      <span className="text-[12px] ml-auto">
        Assentos ocupados: <strong>1</strong>
      </span>
    </div>
  );
}
