import { ModalUserName } from "@/components/modals/modal-user-name";
import Image from "next/image";

export function SeatsFlow() {
  return (
    <>
      <div>
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <span>seats-flow</span>
      </div>

      <ModalUserName />
    </>
  );
}
