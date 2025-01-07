'use client';

import { useRouter } from "next/navigation";


const ModalImage = () => {
  const router = useRouter();
  console.log('telo');
  return (
      <div className="modal-backdrop" onClick={router.back} />

  );
};
export default ModalImage;
