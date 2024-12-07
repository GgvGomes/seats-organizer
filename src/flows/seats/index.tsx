import { ModalUserName } from "@/components/modals/modal-user-name";
import Image from "next/image";

import Logo from "@/assets/image/logo.png";
import { CardsSeat } from "./components/card-seat";
import React from "react";

const teste = [1, 2, 3, 4, 5, 6, 7];

export function SeatsFlow() {
  return (
    <>
      {/* TODO: Arrumar a shadow */}
      <header className="h-auto w-full flex justify-between items-center px-10 py-8 shadow-sm shadow-green-100 border-b-[1px]">
        <Image height={40} src={Logo} alt="Logo Igreja Presbiteriana" />

        <h1 className="font-semibold text-2xl">
          Jantar de final de ano - Segunda IPB de Rio Verde
        </h1>

        {/* TODo: Arrumar a fonte */}
        <div className="flex flex-col items-end">
          <span>
            Data: <b>28 de dezembro de 2022</b>
          </span>
          <span className="">
            Horário: <b>19h30</b>
          </span>
        </div>
      </header>

      <div className="grid grid-cols-3 flex-1 gap-4 flex-grow px-10 w-full p-4">
        {React.Children.toArray(teste.map(() => <CardsSeat />))}
      </div>

      <ModalUserName />
    </>
  );
}
