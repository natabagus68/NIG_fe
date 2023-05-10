import Modal from "./Modal";
import LoadingIcon from "../icons-new/LoadingIcon";
import { useState, useEffect } from "react";

export default function ModalConfirm({
  open = false,
  setOpen,
  setOpenSuccess,
  cb,
}) {
  const [isLoading, setIsLoading] = useState({
    loading: false,
    exec: false,
  });
  useEffect(() => {
    if (!isLoading.loading && isLoading.exec) {
      setIsLoading({ loading: false, exec: false });
      setOpen(false);
      setTimeout(() => {
        setOpenSuccess(true);
      }, 100);
    }
  }, [isLoading.loading, isLoading.exec]);
  return (
    <Modal open={open}>
      <div className="w-[430px] flex flex-col gap-8 items-center">
        <div className="flex items-center justify-center w-[150px] h-[150px] bg-[#F79009] rounded-full border-[#E9EEF5]">
          <span className="text-[90px] font-bold text-white">!</span>
        </div>
        <div className="flex items-center flex-col">
          <span className="text-[#2D2A2A] text-[24px] font-semibold mb-2">
            Confirm the action
          </span>
          <span>is the data you entered correct?</span>
        </div>

        <div className="flex w-full items-end gap-4">
          <button
            className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] border border-[#B8B6B6] rounded text-[#514E4E] text-sm font-semibold"
            onClick={() => {
              setOpen(false);
              setIsLoading({ loading: false, exec: false });
            }}
          >
            Cancel
          </button>
          {isLoading.loading ? (
            <button className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] bg-[#14988B] rounded text-white text-sm font-semibold">
              <LoadingIcon
                color="white"
                className="w-[24px] h-[24px] animate-spin"
              />
            </button>
          ) : (
            <button
              className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] bg-[#14988B] rounded text-white text-sm font-semibold"
              onClick={() => {
                setIsLoading({ loading: true, exec: true });
                cb(setIsLoading);
                // setOpen(false);
                // setTimeout(() => {
                //   setOpenSuccess(true);
                //   cb();
                // }, 100);
              }}
            >
              <span>Yes, Confirm</span>
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}