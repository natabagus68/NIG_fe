import CloseIcon from "@common/components/icons-new/CloseIcon";
// import Robot from "../../../../assets/robot.jpg";

export default function ShowPreviewResume({ open = false, setOpen, setClose }) {
  return (
    <dialog
      open={open}
      className="bg-black bg-opacity-50 w-[100dvw] h-[100dvh] z-50 top-0 left-0 fixed p-0 m-0"
    >
      <div className="p-6 rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div
          className="flex justify-end mb-4 text-[#FFFFFF] font-[700] cursor-pointer"
          onClick={setClose}
        >
          <h1>Tutup</h1>
          <CloseIcon color={"#FFFFFF"} />
        </div>
        {/* <img className="w-[800px] h-[400px]" src={Robot} alt="robot" /> */}
      </div>
    </dialog>
  );
}
